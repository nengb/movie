
const app = require('tcb-admin-node');
app.init();
const db = app.database();
const collections = require('./database/collections')
const { COLLECTIONS_NAME, CO_STRUCT } = collections
const { MOVIE ,CONFIGS, SUGGEST, SEARCH_RECORDS, SEARCH_COUNT_RECORDS ,USERS, REQ_DATA} = COLLECTIONS_NAME;
const { MOVIE_STRUCT, SEARCH_RECORDS_STRUCT,SEARCH_COUNT_RECORDS_STRUCT, SUGGEST_STRUCT } = CO_STRUCT;
const _ = db.command

// 云函数入口文件
const cloud = require('wx-server-sdk')
const router = require('./router.js')
const user = require('./controller/user.js')
const active = require('./controller/active.js')
const movie = require('./controller/movie.js')
const douban = require('./controller/douban.js')


//设置路由区域

router.set('get_movie_list',movie.get_movie_list);
router.set('search_movie',movie.search_movie);
router.set('get_configs',movie.get_configs);
router.set('create_user',user.create_user,0);
router.set('get_user_search_records',movie.get_user_search_records);
router.set('suggest_movie',movie.suggest_movie);

router.set('get_my_movie_list',movie.get_my_movie_list);
router.set('get_movie_info',movie.get_movie_info);
router.set('cross_api_get',douban.cross_api_get);

//获取总路由控制器对象
let handlers = router.getHandlers();
cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(`event`) 
  console.log(event) 
  let { action, data } = event;
  let handler = handlers[action];
  if (!handler){
    return {
      code: -1,
      msg: '未能识别动作',
    }
  }
 
  data = data || {}
  let userInfo = {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
  let reqUrl = {action,data}
  delete reqUrl.openId
  reqUrl = JSON.stringify(reqUrl)
  let result = await db.collection(REQ_DATA).where({
     _id:reqUrl
  }).get()
  // if(result.data && result.data.length==0){
	 //  result = await handler.controller(data,userInfo);
	 //  db.collection(REQ_DATA).add(result)
  // }else{
	 //  result = result.data[0]
  // }
  
  if(result.data && result.data.length>0 && result.data[0].expireTime-Date.now() >0){
	  result = result.data[0].result
	  console.log(` 使用缓存`)
	  console.log(result)
  }else{
	  if(result.data && result.data.length>0){
		  result = result.data[0].result
		  //异步更新数据
		  setTimeout(async ()=>{
			  console.log(` 请求 - `)
			  result = await handler.controller(data,userInfo);
			  db.collection(REQ_DATA).where({
				  _id:reqUrl,
			  }).update({
				  result,
				  expireTime:Date.now()+handler.cacheTime
			  })
			  console.log(result)
		  })
	  }else{
		  //同步更新数据
		  console.log(`同步数据`)
		  result = await handler.controller(data,userInfo);
		  db.collection(REQ_DATA).add({
			  _id:reqUrl,
			  result,
			  expireTime:Date.now()+handler.cacheTime
		  })
		  console.log(result)
	  }
	 
  }
	console.log(`最终数据`)
	console.log(result)
  // let result = await handler.controller(data,userInfo);
  
  
  return {
    data: result.data,
    code:result.code,
    msg:result.msg,
    ...userInfo,
  }






  return 
}