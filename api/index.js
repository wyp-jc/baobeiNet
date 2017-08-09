let path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require("cors");
let connection = require('./dbModules/dbConnection')
let user = require('./modules/user')
//let question = require('./models/question')

let app = express(),
    port = 8099;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

user( app );


module.exports = app.listen(port,function(err){
    if(err){
        console.log(err)
        return
    }
    var uri = 'http://localhost:'+port
    console.log('Listening at ' + uri + '\n')
})