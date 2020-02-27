
const selfish = require('../utils/selfish.js')
const UntilIndex = require('../utils/index.js')
// const db = require('../database/index.js')
const errcode = require('../utils/errcode.js')
const { RET_OK, INVALID_PARAMETER, INTER_NETWORK_ERROR, NO_USER, OPERATE_FAILED } = errcode
// const request = require('request');
// const puppeteer = require('puppeteer');
const app = require('tcb-admin-node');
const user = require('./user.js')
app.init();
const db = app.database();
const collections = require('../database/collections')
const { COLLECTIONS_NAME, CO_STRUCT } = collections
const { MOVIE ,CONFIGS, SUGGEST, SEARCH_RECORDS, SEARCH_COUNT_RECORDS ,USERS} = COLLECTIONS_NAME;
const { MOVIE_STRUCT, SEARCH_RECORDS_STRUCT,SEARCH_COUNT_RECORDS_STRUCT, SUGGEST_STRUCT } = CO_STRUCT;
const _ = db.command
class Main extends UntilIndex {
  constructor() { 
    super()
    
  }

 async get_movie_list(reqData,userInfo) {
  let { openid , unionid, appid } = userInfo;
  let { page,movie_name } = reqData;
	console.log(`get_movie_list`)
 
	if(!page){
		page = 0
	}
    let result = await db.collection(MOVIE).where({
		movie_name,
	}).get()
	
    return this.send(result.data,RET_OK)
  
}

 async search_movie(reqData,userInfo) {
  let { openid , unionid, appid } = userInfo;
  let { searchValue } = reqData;
	console.log(`search_movie`)
	let search_records_struct = SEARCH_RECORDS_STRUCT({
	    search_value:searchValue,
		openid,
		create_time:new db.serverDate()
	})
	let result = await db.collection(SEARCH_RECORDS).add(search_records_struct);
	let search_count_records_struct = SEARCH_COUNT_RECORDS_STRUCT({
	    search_value:searchValue,
		create_time:new db.serverDate()
	})
	
	let userData = await this.get_user_data({ openid });
	if(!userData){
		let createUserResult = await user.create_user({},userInfo)
		userData = createUserResult.data
	}
	if(userData._id){
		await db.collection(USERS).doc(userData._id).update({
		  search_history: _.pull(searchValue)
		})
		db.collection(USERS).doc(userData._id).update({
			search_history:_.push({
			  each: [searchValue],
			  position: 0,
			  slice:5
			}) 
		})
	}
	
	let resultCount = await db.collection(SEARCH_COUNT_RECORDS).doc(searchValue).set(search_count_records_struct);
    return this.send(result,RET_OK)
}
 async suggest_movie(reqData,userInfo) {
	 let { openid , unionid, appid } = userInfo;
	 let { suggestValue } = reqData;
	 let suggest_struct = SUGGEST_STRUCT({
	     suggest_value:suggestValue,
	 	openid,
	 	create_time:new db.serverDate()
	 })
	 let result = await db.collection(SUGGEST).add(suggest_struct);
	 return this.send(result,RET_OK)
 }



async get_user_search_records(reqData,userInfo) {
	let { openid , unionid, appid } = userInfo;
	let user = await this.get_user_data({ openid });
	let  search_history = []
	if(user){
		search_history = user.search_history
	}
	return this.send(search_history,RET_OK)
}




async get_configs(reqData,userInfo) {
	let { openid , unionid, appid } = userInfo;
	let result = await db.collection(CONFIGS).get()
	
	return this.send(result.data,RET_OK)
}



 async get_my_movie_list(reqData,userInfo) {
  let { openid , unionid, appid } = userInfo;
  let { page,movie_name ,douban_id} = reqData;
	console.log(`get_my_movie_list`)
	if(!page){
		page = 0
	}
	let result;
	
	if(douban_id >0){
		douban_id = Number(douban_id)
		result = await db.collection(MOVIE).where({
		  douban_id
		}).get()
		let data = result.data[0];
		if(result && result.data && result.data.length>1){
			data.movie_origin_list = []
			let orignData = {}
			result.data.forEach(e=>{
				if(e.movie_origin_list){
					e.movie_origin_list.forEach(item=>{
						item.forEach(movie=>{
							let { episode,movie_url,origin} = movie;
							if(!orignData[origin]){
								orignData[origin] = []
							}
							orignData[origin].push({ episode,movie_url,origin})
						})
					})
				}
			})
			// console.log("orignData")
			// console.log(orignData)
			for(let key in orignData){
				data.movie_origin_list.push(orignData[key])
			}
			// console.log("data")
			// console.log(data)
			result.data = [data]
			
			
		}
		console.log(result)
	}
	if( !result || (result && result.data && result.data.length == 0) ){
		result = await db.collection(MOVIE).where({
		  movie_name: db.RegExp({
			regexp: movie_name,
			options: 'im',
		  })
		}).get()
	}
	
	if( !result || (result && result.data && result.data.length <10) ){
		let data = await db.collection(MOVIE).where({
		  movie_casts: db.RegExp({
			regexp: movie_name,
			options: 'im',
		  })
		}).get()
		
		result.data = result && result.data.length>0? [...result.data,...data.data]:result.data
	}
	
	if( !result || (result && result.data && result.data.length == 0) ){
		result = await db.collection(MOVIE).where({
		  movie_type: db.RegExp({
			regexp: movie_name,
			options: 'im',
		  })
		}).get()
	}
	if( !result || (result && result.data && result.data.length == 0) ){
		result = await db.collection(MOVIE).where({
		  director: db.RegExp({
			regexp: movie_name,
			options: 'im',
		  })
		}).get()
	}
	
	
	
	console.log(result)
    return this.send(result.data,RET_OK)
  
}

async get_movie_info(reqData,userInfo){
	let { openid , unionid, appid } = userInfo;
	let { page,playid } = reqData;
	let result = await db.collection(MOVIE).where({
	  _id: Number(playid)
	}).get()
	let data = {}
	if(result.data && result.data[0]){
		data = result.data[0]
	}
	console.log(result)
	console.log(data)
	return this.send(data,RET_OK)
}






}

module.exports = selfish(new Main());
