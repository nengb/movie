
const selfish = require('../utils/selfish.js')
const UntilIndex = require('../utils/index.js')
const errcode = require('../utils/errcode.js')
const { RET_OK, INVALID_PARAMETER, INTER_NETWORK_ERROR, NO_USER, OPERATE_FAILED } = errcode
// const db = require('../database/index.js')

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


    // https://www.json.cn/#
    /**
    * showdoc
    * @catalog 首页
    * @title 微信小程序注册用户
    * @description 微信小程序注册用户接口(同一用户多次调用不会新增用户)
    * @method cloud
    * @url create_user
    * @param name 可选 string 用户昵称  
    * @param sex 可选 number 用户性别  1：男性，2：女性 
    * @param headimg 可选 string 用户头像  
    * @param invitor 可选 string 邀请人id
    * @return {"data":{"_id":"17512835","about_me":null,"addr":null,"appid":"wx8b8459c0c44cb46d","attent_wechat":false,"create_time":"2019-04-19T09:35:28.852Z","has_attent_active":false,"headimg":null,"invitor":null,"money":0,"name":"neng","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","phone":null,"real_name":null,"sex":null,"unionid":null,"userid":"25979246"},"code":0,"msg":"ok","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","appid":"wx8b8459c0c44cb46d"}
    * @return_param appid string 小程序appid
    * @return_param openid string 用户openid
    * @return_param unionid string 用户unionid
    * @return_param create_time string 用户创建时间
    * @remark 这里是备注信息
    * @number 1
    */
    async create_user(reqData, userInfo) {
        let { openid, unionid, appid } = userInfo;
        let { name, sex, headimg, invitor } = reqData;
        // let result = await db.create_user({ name, sex, headimg, invitor, openid, unionid, appid  });
        let user = await this.get_user_data({ openid });
        if (user) {
            try {
				let updataData = {
					last_login_time:new db.serverDate()
				}
				if(name){
					updataData.name = name
				}
				if(headimg){
					updataData.headimg = headimg
				}
				
				if(!user.sex && sex>=0){
					updataData.sex = sex
				}
				if(!user.invitor && invitor>=0){
					updataData.invitor = invitor
				}
				console.log(`updataData`)
				console.log(updataData)
                await db.collection(USERS).where({
                    openid
                }).update(updataData)
				user = await this.get_user_data({ openid });
            } catch (error) {
                console.error(error)
            }
        
            return this.send(user, RET_OK)
        }
        let create_time = new db.serverDate();
        let userid = await this.generateUserId();

        let user_struct = {
            ...reqData,
            _id: userid,               //玩家id
            appid,                     //appid
            openid,
            unionid,
            userid,
            create_time,
            last_login_time:create_time,
            // has_attent_active: false,   //是否参加过接龙
        }

        user_struct = USERS_STRUCT(user_struct);
        let result = await db.collection(USERS).add(user_struct)

        if (result.code != null) {
            return null;
        }

        user = await this.get_user_data({ userid: result.id, openid })
        result = user
        //添加自己为粉丝
        // this.add_fans(userid, userid);
        return this.send(result, RET_OK)
    }




    //用户添加粉丝
    async add_fans(userid, fansid) {

        let fans_struct = USER_FANS_STRUCT({
            userid,
            fansid,
            fans_state: 0,
            create_time: new db.serverDate(),
        })

        let result = await db.collection(USER_FANS).add(fans_struct);
        console.log(`add_fans`, result)
        return result;

    }


    /**
     * showdoc
     * @catalog 首页
     * @title 屏蔽粉丝或修改粉丝备注
     * @description 屏蔽粉丝或修改粉丝备注
     * @method cloud
     * @url update_user_fans_info
     * @param userid 必选 string 用户凭证token 
     * @param fansid 必选 number 粉丝id
     * @param fans_state 可选 number 粉丝状态：0：关注，1：屏蔽
     * @param remark_name 可选 string 粉丝备注名称
     * @return {"data":{"requestId":"096925d688c8","updated":1},"code":0,"msg":"ok","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","appid":"wx8b8459c0c44cb46d"}
     * @remark 这里是备注信息
     * @number 1
     */
    async update_user_fans_info({ userid, fansid, fans_state, remark_name }) {
        if (!userid || !fansid || !(fans_state == null || remark_name)) {
            return this.send(null, INVALID_PARAMETER)
        }

        let result = await db.collection(USER_FANS).where({ userid, fansid }).update({
            fans_state,
            remark_name,
        })

        return this.send(result, RET_OK)

    }


    /**
    * showdoc
    * @catalog 首页
    * @title 更新用户信息
    * @description 更新用户信息
    * @method cloud
    * @url update_user_info
    * @param userid 必选 string 用户凭证token 
    * @param real_name 可选 string 联系人（名称）
    * @param phone 可选 string 联系电话
    * @param addr 可选 string 联系地址
    * @param about_me 可选 string 我的简介
    * @return {"data":{"requestId":"531c8333df79a","updated":1},"code":0,"msg":"ok","openid":"oP7dK5NPQN4BnaMStTOLqM4xcpxg","appid":"wx8b8459c0c44cb46d"}
    * @remark 这里是备注信息
    * @number 1
    */
    async update_user_info({ userid, real_name, phone, addr, about_me }) {
        if (!userid) {
            return this.send(null, INVALID_PARAMETER)
        }

        let result = await db.collection(USERS).where({ userid }).update({
            real_name,
            phone,
            addr,
            about_me,
        })

    
        return this.send(result, RET_OK)

    }




}

module.exports = selfish(new Main());
