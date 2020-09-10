var express=require('express');
var app= express();
var router=express();
var mongoose=require("mongoose");
var fs=require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

//login 
router.post('/login',middlewareBodyParser,function(req,resp){

    var userName=req.body.userName;
    var password=req.body.password;
   mongoose.model('users').findOne({userName:userName,password:password},function(err,data){

    resp.json(data);

   })

});



module.exports=router;