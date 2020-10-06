//include express library
const express=require("express");
const app=express();
//create server object
const http=require("http").Server(app);
//include socket.io
const io=require("socket.io")(http);
//include uuid
const { v4 : uuidV4 } = require("uuid");


app.set('view engine','ejs');
app.use(express.static("public"));
//home route
app.get("/",(req,res)=>{
  //store uuid inside variable x
  var x=uuidV4();
  //append x to the hme url and redirect
  res.render("roomFrontend");
});
//home+uuid url route
/*app.get("/:room",(req,res)=>{
  res.render("roomFrontend",{roomId:req.params.room});
})*/
io.on("connection",(socket)=>{
  console.log("connected");
  /*io.on("join-room",()=>{
    console.log("joined room");
  })*/
})
app.listen(3001,function()  {console.log("started");});
