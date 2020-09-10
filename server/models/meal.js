var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var meals=new Schema({
   name:String,
   desc:String
})
// ORM
mongoose.model("meals",meals);
