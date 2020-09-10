var express=require('express');
var app= express();
var router=express();
var mongoose=require("mongoose");
var fs=require('fs');
var bodyParser= require('body-parser');
var middlewareBodyParser = bodyParser.json();


//orderlist
router.get('/listOrder',function(req,resp){
    mongoose.model('orders').find(function(err,data){
        resp.send(data);
    })
})


// add order


router.post('/addOrder', middlewareBodyParser, (req, resp, next) => {
    var OrderModel = new mongoose.model('orders');
  
    var order = new OrderModel();
    order.time=req.body.time;
    order.meals=req.body.meals;
    order.notes=req.body.notes;
    order.save(function (err, data) {
      console.log(data);
      resp.json(data);
    })
  
  
  });

  // list order details

  router.get('/orderDetails/:_id',function(req,resp){

     
      var _id=req.params._id;
     
     mongoose.model('orders').findOne({_id:_id},function(err,data){
  
      resp.json(data);
  
     })

  })


module.exports=router;