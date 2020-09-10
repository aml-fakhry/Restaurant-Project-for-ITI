var express =require("express")
var orderController= require('./controllers/order');
var mealController= require('./controllers/meal');
var userController= require('./controllers/user');

var mongoose=require("mongoose")
var fs=require("fs");
var app = express();



var router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();




app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/Resturant_DB");

var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});

// order controller middleware
app.use('/order',orderController);

//meal controller midelWare
app.use('/meal',mealController)

// user controller midelWare
app.use('/user',userController);


app.listen(8080 ,function(){
 console.log("server on 8080")   
});
