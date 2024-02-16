const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
     email:{type:String,required:true,unique:true},
      password:{type:String,required:true},
       picture:{type:String,required:true , default:  "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",}

},
{
  timestamps:true,
});

// to compare two passwords using bcrypt - 
// methods , its not method
userSchema.methods.matchPassword= async function (enteredPassword){
      return await bcrypt.compare(enteredPassword,this.password);
}

// before saving add a function for encryption, gonna take next coz its a middleware 
userSchema.pre('save',async function (next) {
  if(!this.isModified){ // if current password not modified
    next();
  }
  const  salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);

})

const User = mongoose.model("User",userSchema);
module.exports = User;