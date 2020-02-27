const http = require('http');
const https = require('https');
const qs = require('querystring');

exports.getSync = function (url, data, safe, nocon) {
    if (data) {
        var content = qs.stringify(data);
        var url = url + '?' + content;
    }

    var proto = http;
    if (url.indexOf('https:') > -1) {
        proto = https;
    }
    var ret = {
        err: null,
        data: null,
    };

    return new Promise((resolve, reject) => {
        var req = proto.get(url, function (res) {
            var str = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                str += chunk;
            });
            res.on('end', function () {
                try {
                    ret.data = JSON.parse(str);
                } catch (err) {
                    console.error("请求" + host + path + '出错：参数为' + options + '获得参数据为' + str)
                }
                resolve(ret);
            });
        });

        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
            ret.err = e;
            resolve(ret);
        });
        req.end();
    })
};