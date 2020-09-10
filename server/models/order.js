var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var orders=new Schema({
  
    time:String,
    meals:[],
    notes:String
})
// ORM
mongoose.model("orders",orders);
