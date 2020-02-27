
const selfish = require('../utils/selfish.js')
const UntilIndex = require('../utils/index.js')
// const db = require('../database/index.js')
const errcode = require('../utils/errcode.js')
const { RET_OK, INVALID_PARAMETER, INTER_NETWORK_ERROR, NO_USER, OPERATE_FAILED } = errcode

const app = require('tcb-admin-node');
app.init();
const db = app.database();
const collections = require('../database/collections')
const { COLLECTIONS_NAME, CO_STRUCT } = collections
const { ACTIVE_LEAVE_MSG, ACTIVE_LIST, BILLS, GOODS, USER_ACTIVE, USER_ACTIVE_RECORDS, USER_FANS, USER_GOOD_CLASS, USER_READ_ACTIVE, USERS } = COLLECTIONS_NAME;
const { ACTIVE_LEAVE_MSG_STRUCT, ACTIVE_LIST_STRUCT, BILLS_STRUCT, GOODS_STRUCT, USER_ACTIVE_STRUCT, USER_ACTIVE_RECORDS_STRUCT, USER_FANS_STRUCT, USER_GOOD_CLASS_STRUCT, USER_READ_ACTIVE_STRUCT, USERS_STRUCT } = CO_STRUCT;
const _ = db.command
class Main extends UntilIndex {
  constructor() { 
    super()
    
  }



  /**
  * showdoc
  * @catalog 发布接龙
  * @title 发布接龙
  * @description 发布接龙接口
  * @method cloud
  * @url publish_active
  * @param active_type 必选 number 接龙类型，1：报名接龙-enlist，2：团购接龙-buy，3：互动接龙-interact，4：拼团接龙-assemble，5：阅读接龙-read，6：评选接龙-select，7：费用接龙-cost
  * @param phone 可选 number 客服电话  
  * @param title 必选 string 主题  
  * @param state 必选 number 活动状态，0：保存预览，1：发布，2：完成  
  * @param list_info 可选  array 列表内容，json数组对象， （dataType,1：文字，2：图片，3：视频）
  * @param o_list_info 可选  array 列表内容，json数组对象，（报名接龙和互动接龙有效） （dataType,1：填写项，2：图片，3：视频,4:语音，5：位置，6：单选项，7：多选项）,
  * @param participant_info 可选 array 参与人信息，json数组对象 ， 让参与人填写信息（别名，编号，联系人，电话，地址，自定义）
  * @param group_way 必选 array 拼团方式，json数组对象，（报名项目、团购商品、拼团商品、选项、筹款等栏目）
  * @param most_optional 必选 number 最多可选 （只有在评选接龙才有效，1：最多可选1项，2：最多可选2项）
  * @param hide 必选 number 传播隐私，0：所有人均可转发，1：隐藏接龙且所有人均可转发，2：只有发布者可以转发
  * @param start_time 必选 number 活动开始时间,使用serverDate
  * @param end_time 必选 number 活动结束时间,使用serverDate
  * @param locale 必选 string 活动地点
  * @param background 必选 number 活动背景 
  * @param user_secret 必选 number 用户隐私设置，0：公开所有参与者信息，1：匿名所有参与者信息
  * @param leave_msg 可选 number  留言设置，0：参与者无需留言，1：参与者可留言(不传默认0）
  * @param all_count 可选 number 接龙次数，-999:无限次， 不传默认-999
  * @param start_price 可选 number 接龙起购价(不传默认0）
  * @param show_user_info 可选 number 参与人显示，0：头像+微信名，1：头像+微信名匿名，2：头像，3：微信名，4：微信名匿名(不传默认0）
  * @param pay_mode 可选 number 确认接龙方式，0：支付后完成接龙，1：先完成接龙暂不支付 (不传默认0）
  * @param reward_setting 可选 array 接龙奖励设置，json数组对象 ，（奖励费用、是否公开奖励规则、设定奖励区域范围、参与接龙有镜像、分享有奖励等）
  * @param tips 可选 string 填写让参与人注意的重要信息
  * @return {"data":{"id":"988c1b1b5cb99c0f021782de57508e2a","requestId":"f484cb0bd298"},"code":0,"msg":"ok","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","appid":"wx8b8459c0c44cb46d"}
  * @remark 这里是备注信息
  * @number 2
  */
  async publish_active(reqData,userInfo) {
    let { openid , unionid, appid } = userInfo;
    let { active_type, phone, title, state, list_info, o_list_info, participant_info, group_way,
      most_optional, hide, start_time, end_time, locale, background, user_secret,
      leave_msg, all_count, start_price, show_user_info, pay_mode, reward_setting, tips } = reqData;

    if(title == null || state == null){
      return this.send(null,INVALID_PARAMETER)
    }

    let user = await this.get_user_data({openid});
    if (user == null) {
      return this.send(null,NO_USER)
    }
    if (!await this.check_activeType(active_type)) {
      return this.send(null,INVALID_PARAMETER)
    }

    let { userid } = user;

    let active_struct = {
      userid,             
      ...reqData,
      create_time:new db.serverDate(), 
      alter_time:new db.serverDate(),
    }

    active_struct = USER_ACTIVE_STRUCT(active_struct);

    let result = await db.collection(USER_ACTIVE).add(active_struct)
    console.log(result)
    if(result && result.id){
      result = await db.collection(USER_ACTIVE).where({_id:result.id})
    }
   
    return this.send(result,RET_OK)

  }



  async add_active_list(reqData,userInfo){
    let { active_type ,name_en, name_cn, state, description }  = reqData;
    let result = await db.collection(ACTIVE_LIST).add({ _id:active_type ,active_type,name_en, name_cn, state, description })
    if (result.code != null) {
      return null;
    }
    return result;
  }

  //校验活动类型
  async check_activeType(active_type){
    if(!active_type){
      return false;
    }
    let result = await db.collection(ACTIVE_LIST).where({ active_type }).get()
    if (result.code != null) {
      return null;
    }
    if(result.data && result.data.length >0){
      return true
    }

    return false;

}


 /**
  * showdoc
  * @catalog 发布接龙
  * @title 阅读接龙
  * @description 阅读接龙接口
  * @method cloud
  * @url read_active
  * @param active_id 必选 string 接龙id
  * @return {"data":{"requestId":"531c8333df79a","updated":1},"code":0,"msg":"ok","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","appid":"wx8b8459c0c44cb46d"}
  * @remark 这里是备注信息
  * @number 2
  */
 async read_active(reqData,userInfo) {
  let { openid , unionid, appid } = userInfo;
  let { active_id  } = reqData;

  if(active_id == null){
    return this.send(null,INVALID_PARAMETER)
  }

  let user = await this.get_user_data({openid});
  if (user == null) {
    return this.send(null,NO_USER)
  }
  
  let { userid } = user;

  let activeData = await db.collection(USER_ACTIVE).where({_id:active_id}).get()
  if(activeData && activeData.data && activeData.data[0]){
    let { title } = activeData.data[0];
      let result = await db.collection(USER_FANS).where({fansid:userid,userid:activeData.data[0].userid}).update({
        last_read_activeid:active_id,
        last_read_active_title:title,
        readTimes:_.inc(1),
        read_alter_time:new db.serverDate(),
      })

      let add_read_user = {}
      add_read_user[userid] = true;

      await db.collection(USER_ACTIVE).where({_id:active_id}).update({
        read_user:add_read_user,
      })
    return this.send(result,RET_OK)

  }else{
    return this.send(null,OPERATE_FAILED)
  }

}



 /**
  * showdoc
  * @catalog 发布接龙
  * @title 参加接龙
  * @description 参加接龙接口
  * @method cloud
  * @url attend_active
  * @param active_id 必选 string 接龙id
  * @param comments 可选 string 备注
  * @param reward_money 可选 string 奖励金额
  * @param active_content 必选 string 接龙内容
  * @param attend_cost 可选 string 参与接龙花费
  * @param state 可选 string 接龙状态，1：未完成，2：失败，3：已付款，4，申请退款中，,5：同意退款，6：已完成接龙（收到货）
  * @return {"data":{"id":"988c1b1b5cb99c0f021782de57508e2a","requestId":"f484cb0bd298"},"code":0,"msg":"ok","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","appid":"wx8b8459c0c44cb46d"}
  * @remark 这里是备注信息
  * @number 2
  */
 async attend_active(reqData,userInfo) {
  let { openid , unionid, appid } = userInfo;
  let { active_id, comments, reward_money, active_content ,attend_cost ,state } = reqData;

  if(active_id == null){
    return this.send(null,INVALID_PARAMETER)
  }

  let user = await this.get_user_data({openid});
  if (user == null) {
    return this.send(null,NO_USER)
  }

    let active_records_struct = {
      userid,             
      ...reqData,
      create_time:new db.serverDate(), 
    }
  
    active_records_struct = USER_ACTIVE_RECORDS(USER_ACTIVE_RECORDS);

    let result = await db.collection(USER_ACTIVE_RECORDS).add(active_records_struct);

    return this.send(result,RET_OK)


  
}











}

module.exports = selfish(new Main());
