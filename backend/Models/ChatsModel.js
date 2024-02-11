const mongoose = require('mongoose')
// Chatname 
// group
// list of users
// latest message
// who is the group admin 

const chatsSchema = mongoose.Schema({
  chatName:{type:String,trim :true},
  isGroupChat:{type:boolean, default:false},
  users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  latestMessage:{type:mongoose.Schema.Types.ObjectId,
  ref:"Message",},
  groupAdmin:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
  }



},
{
  timestamps:true,
})

const Chat = mongoose.model("Chat",chatsSchema);
model.exports = Chat;