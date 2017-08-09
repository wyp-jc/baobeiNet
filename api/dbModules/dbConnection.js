var mysql = require('mysql')

//配置
var options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '111111',
    database: 'backstage',
    insecureAuth: true
}

var connection = mysql.createConnection(options) // 创建数据库连接

connection.connect(function(err){
    if(err) {  
        console.log("连接失败");  
    }else{  
        console.log("连接成功");  
    }  
})
// connection.on('error',function(){
//     console.log('失败')
// })
module.exports = connection