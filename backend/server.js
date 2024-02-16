const express = require("express");
const { chats } = require("./data/data");
// const port =5000;
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const colors = require("colors");
const { json } = require("stream/consumers");
const userRoutes = require("./routes/userRoutes");
const { NOTFOUND } = require("dns");


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept json data

app.get("/",(req,res)=>{
  res.send("starting a new chat application")
})

// app.get("/api/data",(req,res)=>{
//   res.send(chats);
// })

// app.get("/api/data/:id",(req,res)=>{
//     // console.log(req)
//     // console.log(req.params.id)
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(singleChat)
// })


app.use("/api/users",userRoutes);


// app.use(notFound);
// app.use(errorHandler);



const p = process.env.PORT || 5000

app.listen(p,()=>{console.log(`app is listening to port ${p}`.yellow.bold)});