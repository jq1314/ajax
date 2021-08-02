let express = require('express')

let app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.get('/get_code', function (req, res) {
    console.log('有人找我要验证码了');
    setTimeout(function () {
        let authCode = Math.floor(Math.random() * 8999 + 1000)
    }, 4000)
})
app.listen(3000, function (err) {
    if (err) console.log(err)
    else {
        console.log('【练习取消上一次请求服务器启动成功！】')
        console.log('【点击这里去练习吧：http://localhost:3000/verifiCode.html】')
    }
})