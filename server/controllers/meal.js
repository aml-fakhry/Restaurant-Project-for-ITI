var express=require('express');
var app= express();
var router=express();
var mongoose=require("mongoose");
var fs=require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

//list meal
router.get('/listMeal',function(req,resp){
    mongoose.model('meals').find(function(err,data){
        resp.send(data);
    })
})

// add meal
router.post('/addMeal', middlewareBodyParser, (req, resp, next) => {
    var mealModel = new mongoose.model('meals');
  
    var meal = new mealModel();
    meal.name=req.body.name;
    meal.desc=req.body.desc;
    
    meal.save(function (err, data) {
      console.log(data);
      resp.json(data);
    })
  
  
  });


module.exports=router;