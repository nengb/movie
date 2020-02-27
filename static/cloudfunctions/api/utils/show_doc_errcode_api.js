var request = require('request');

var errcode = require('./errcode');
console.log(errcode)

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
n = n.toString()
return n[1] ? n : '0' + n
}
let data = {
    api_key:'e4b45bf51f3fa5cca831087d3084b5451183951590',
    api_token:'78fcfd139df3eb4fb5dd9a0d92e3624e750504370',
    cat_name:'',
    page_title:`全局错误码`,
    page_content:`
- 更新时间：${formatTime(new Date())} \n
| code | msg   |
| ------------ | ------------ |
    `,
    s_number:'1',
}

function getCodeMsg(code,msg){
    return `|  ${code} |  ${msg} |\n`;
}

let content =``
for(let processKey in errcode){

 
        let code = errcode[processKey].code;
        let msg = errcode[processKey].msg;
        // if(code && allCode[code]){
        //     console.error(`errcode.js 文件 存在相同的 code  位置：${processKey}.${typeKey}  重复的位置：${allCode[code]}`)
        // }else{
        //     allCode[code] = `code 进程类型：${processKey}.${typeKey}`

            data.page_content+= getCodeMsg(code,msg)

            // }
}


console.log(data.page_content)
console.log(data.page_title)
request.post('https://www.showdoc.cc/server/api/item/updateByApi',function(error, response, body){
// console.log(error)
// console.log(response)
}).form(data)
