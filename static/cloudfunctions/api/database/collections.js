//集合名称
exports.COLLECTIONS_NAME = {
    ACTIVE_LEAVE_MSG: 'active_leave_msg',                   //接龙留言
    ACTIVE_LIST: 'active_list',                             //接龙类型配置
    BILLS: 'bills',                                         //用户账单
    GOODS: 'goods',                                         //用户商品
    USER_ACTIVE: 'user_active',                             //用户接龙信息
    USER_ACTIVE_RECORDS: 'user_active_records',             //用户参加过的接龙记录
    USER_FANS: 'user_fans',                                 //用户粉丝
    USER_GOOD_CLASS: 'user_good_class',                     //用户商品分类
    USER_READ_ACTIVE: 'user_read_active',                   //用户看过的接龙
    USER_SUBSCRIBE: 'user_subscribe',                       //用户订阅
    
    USERS: 'users',                                         //用户信息

    MOVIE:'movies',                                          //电影信息
    CONFIGS:'configs',                                       //配置
    SEARCH_RECORDS:'search_records',                         //搜索记录表
    SEARCH_COUNT_RECORDS:'search_count_records',             //搜索统计记录表
    SUGGEST:'suggest',                         				 //建议表
    REQ_DATA:'req_data',                         			 //云函数请求缓存表
	

}
//集合结构
exports.CO_STRUCT = {
    //用户信息
    USERS_STRUCT: (data) => {
        return {
            _id: data.userid,                                            //id
            appid: data.appid || null,                                //用户appid 
            openid: data.openid || null,                              //用户openid
            unionid: data.unionid || null,                            //用户unionid
            userid: data.userid || null,                              //用户id 
            name: data.name || null,                                  //用户名称
            sex: data.sex || null,                                    //用户性别
            headimg: data.headimg || null,                            //用户头像
            invitor: data.invitor || null,                            //邀请人
            // money: data.money || 0,                                   //余额
            create_time: data.create_time || null,                    //用户创建时间
            last_login_time: data.last_login_time || null,            //用户最后登陆时间
            // phone: data.phone || null,                                //电话
            // real_name: data.real_name || null,                        //联系人姓名
            // addr: data.addr || null,                                  //收货地址
            // about_me: data.about_me || null,                          //用户简介
            // has_attent_active: data.has_attent_active || false,       //是否参加过接龙
            // attent_wechat: data.attent_wechat || false,               //是否关注公众号
            // fans_total: data.fans_total || 0,                         //粉丝数量
            // active_total: data.active_total || 0,                     //接龙数量
			search_history:[],											//搜索记录
        }
    },
	//电影信息表
    MOVIE_STRUCT: (data)=>{
		return {
			douban_id:data.douban_id || 0,
			movie_name:data.movie_name || '',
			videos:data.videos || '',
			create_time: data.create_time || null,                    
		}
    },
	//搜索记录表
	SEARCH_RECORDS_STRUCT:(data)=>{
		return {
			search_value:data.search_value || '',
			openid:data.openid || '',
			create_time: data.create_time || null,
		}
	},
	SEARCH_COUNT_RECORDS_STRUCT:(data)=>{
		return {
			search_value:data.search_value || '',
			create_time: data.create_time || null,
			count: data.count||0
		}
	},
	
	SUGGEST_STRUCT:(data)=>{
		return {
			suggest_value:data.suggest_value || '',
			openid:data.openid || '',
			create_time: data.create_time || null,
		}
	}
    
  
    

}