module.exports = {
    //0 - 操作成功
    RET_OK : { code:0, msg:'ok' },
    //1000 - 参数错误
    INVALID_PARAMETER:{ code:1000, msg:'参数错误' },
    //1001 - 内部网络错误
    INTER_NETWORK_ERROR:{ code:1001, msg:'内部网络错误' },
    //1002 - 未注册用户
    NO_USER: { code:1002, msg:'未注册用户' },
    //1003 - 文件过大
    FILE_TOO_BIG: { code:1003, msg:'文件过大' },
    //1004 - 不存在的文件类型
    NO_FILE_TYPE: { code:1004, msg:'不存在的文件类型' },
    //1005 - 操作失败
    OPERATE_FAILED: { code:1005, msg:'操作失败' },
}