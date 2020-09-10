var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var users=new Schema({
    userName:String,
    password:String
})
// ORM
mongoose.model("users",users);
