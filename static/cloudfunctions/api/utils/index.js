
const app = require('tcb-admin-node');
app.init();
const db = app.database();
const collections = require('../database/collections')
const { COLLECTIONS_NAME, CO_STRUCT } = collections
const { USERS, USER_ACTIVE, ACTIVE_LIST } = COLLECTIONS_NAME;
const { USERS_STRUCT, USER_ACTIVE_STRUCT, ACTIVE_LIST_STRUCT } = CO_STRUCT;
const _ = db.command

class Main{
  constructor(){
  }

  async generateUserId() {
    let Id = "";
    for (let i = 0; i < 8; ++i) {
      if (i > 0) {
        Id += Math.floor(Math.random() * 10); 
      } 
      else { 
        Id += Math.floor(Math.random() * 9) + 1;
      }
    }
    // Id = 21362514
    let ret = await this.get_user_data({userid:Id})
    if (ret) {
      return await this.generateUserId();
    } else {
      return Id;
    }
  }
  async get_user_data({userid,openid}){ 
    console.log("get_user_data",userid,openid)

    let result = await db.collection(USERS).where({
      userid,
       openid
    }).get()
    console.log("get_user_data")
    console.log(result)
    if (result.code != null) {
      return null;
    }
    return result.data[0];
  }

  send(data,msg){
	  
    return { data , ...msg }
  }
  

  
}

module.exports = Main