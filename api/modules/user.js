let userDB = require( "../dbModules/user" );

module.exports = function(app){
    //登录
    app.post('/login',function(req,res){
        userDB.loginDo(req).then(function(result){
            res.writeHead(200, { 'Content-type': 'text/plain;charset=utf-8' })
            console.log(result)
            if(result.length>=1){
                res.end(JSON.stringify({code:1,data:result[0]}))
            }else{
                res.end(JSON.stringify({code:0}))
            }
        })

    })

}