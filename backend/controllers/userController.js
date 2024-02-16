// import expressAsyncHandler from "express-async-handler";
// import { findOne, create } from "../Models/UserModel";

const expressAsyncHandler = require("express-async-handler");
const um = require("../Models/UserModel");
const generateToken = require("../config/generateToken");


const authUser = expressAsyncHandler(
  async(req,res) =>{

    const{email, password} = req.body;
    if(!email|| !password){
      res.status(400);
      throw new error("please fill all the fields");
    }

    const user = await um.findOne({email});
    if(user && (await user.matchPassword(password))){
       res.status(201).json({
          _id:user._id,
          name:user.name,
          email:user.email,
          pic:user.pic,
          token:generateToken(user._id),
        });

    }
    else{
      res.status(401);
      throw new error("invalid login credentials");
    }

  }
);

const registerUser = expressAsyncHandler( async(req,res) =>{
  const{name,email,password,pic} = req.body;

  if(!name || !email || !password){
      res.status(400);
      throw new error("please enter all the fields");
  }

    const userExists = await um.findOne({email});

    if(userExists){
      res.status(400);
      throw new error("user already exists");
    }
    
      const user = await um.create({
        name, email, password,pic,
      });
      
      if(user){
        res.status(201).json({
          _id:user._id,
          name:user.name,
          email:user.email,
          pic:user.pic,
          token:generateToken(user._id),
        });
      }
      else{
        res.status(400);
        throw new error(" failed to create user");
      }

      




});

module.exports= {registerUser,authUser};