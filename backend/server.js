const express = require("express");
const { chats } = require("./data/data");
// const port =5000;
const dotenv = require("dotenv")

const app = express();
// dotenv.config();

app.get("/",(req,res)=>{
  res.send("starting a new chat application")
})

app.get("/api/data",(req,res)=>{
  res.send(chats);
})

app.get("/api/data/:id",(req,res)=>{
    // console.log(req)
    // console.log(req.params.id)
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat)
})
const p = process.env.PORT || 5000

app.listen(p,()=>{console.log(`app is listening to port ${p}`)});