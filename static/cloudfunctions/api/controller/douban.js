
const selfish = require('../utils/selfish.js')
const UntilIndex = require('../utils/index.js')
// const db = require('../database/index.js')
const errcode = require('../utils/errcode.js')
const { RET_OK, INVALID_PARAMETER, INTER_NETWORK_ERROR, NO_USER, OPERATE_FAILED } = errcode
// const request = require('request');
// const puppeteer = require('puppeteer');
const app = require('tcb-admin-node');
const user = require('./user.js')
const http = require('../utils/http')
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
	
  //跨域api请求
  async cross_api_get(reqData,userInfo){
	  let { openid , unionid, appid } = userInfo;
	  let { api_reqPath, api_reqData } = reqData;
	  console.log(reqData)
     let result = await http.getSync(api_reqPath,api_reqData)
   
    return this.send(result.data,RET_OK)

  }


}

module.exports = selfish(new Main());
