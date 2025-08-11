const express = require('express'); // require our express from node module

const app = express(); //creating a new application of express

app.use("/test",(req,res)=>{
   res.send("hello hello ");
});

app.use("/hello",(req,res)=>{
   res.send("hello");
});

app.use("/",(req,res)=>{
   res.send("hello hello hello");
});

app.listen(7777,()=>{
    console.log("server is successfully running on port 7777");
});