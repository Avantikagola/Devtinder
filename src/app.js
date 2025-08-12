const express = require('express'); // require our express from node module

const app = express(); //creating a new application of express

app.use("/user",
    (req,res,next)=>{
    console.log("route handler 1");
    res.send("route 1");
    next();// if this function does not have a res.send it see next and move to next function
},(req,res,next)=>{
     console.log("route handler 2");
    //res.send("route 2");
    next();
},(req,res,next)=>{
    console.log("route handler 3");
    //res.send("route 3");
    next();
},(req,res)=>{
    console.log("route handler 4");
    //res.send("route 4");
});


app.listen(7777,()=>{
    console.log("server is successfully running on port 7777");
});










/*app.get('/user/:id/:name/:password', (req,res)=>{ /// if we do http:localhost:7777/user/101/avi/45678 it give give id:101 name:avi... in console
    console.log(req.params);
    res.send("hiii user");
});
app.get(/ab?c/, (req,res)=>{ /// it will give same response even we write /abc, /ac means b is optional
     res.send("hiii abc");
});

app.get(/xy+z/, (req,res)=>{// it will give same response if we do /xyz, /xyyyyyz, but not if /xyyyzz
   res.send("hii xyz");
});

app.get(/lm*no/, (req,res)=>{// it will give same response if we do /lmno, /lmavantikano,/lmajsgdugduno but not if /xyyyzz
   res.send("hii lmno");
});*/

