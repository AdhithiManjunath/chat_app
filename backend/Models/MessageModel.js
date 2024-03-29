const mongoose = require("mongoose")
//name of sender 
// content of message 
// reference to chat it belongs to 
const messageSchema = mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    content:{type:String, trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
},{
  timestamps:true,
});

const Message = mongoose.model("Message",messageSchema);
module.exports = Message;