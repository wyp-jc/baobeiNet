let connection = require('./dbConnection')

let userDB = {}
//登录
userDB.loginDo = function ( req ) {
    var promise = new Promise(function(resolve,reject){
        let pass=req.body.pass
        console.log(req.body)
        if(req.body.tel){
            let tel=Number(req.body.tel)
            console.log(pass,tel)
            connection.query('select * from user where phone=? and userPwd=?',[tel,pass],function(err,result){
                
                if (err) {
                    reject(err)
                } else {
                    resolve( result )
                }
            })
        }
        if(req.body.mail){
            var email = req.body.mail
            connection.query('select * from user where email=? and userPwd=?',[email,pass],function(err,result){
                if (err) {
                    reject(err)
                } else {
                    resolve( result )
                }
            })
        }
        if(req.body.userName){
            let user = req.body.userName
            connection.query('select * from user where userName=? and userPwd=?',[user,pass],function(err,result){
                if (err) {
                    reject(err)
                } else {
                    resolve( result )
                }
            })
        }
    })
    return promise
}

module.exports = userDB;
