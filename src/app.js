const express = require('express'); // require our express from node module
const connectdb=require("./config/database");
const User=require("./models/user");

const app = express(); //creating a new application of express

app.use(express.json());

app.post("/signup",async(req,res)=>{
    //console.log(req.body);
    //creating the new instance of user model
    const newuser=new User(req.body);//creating new user with userObj data
    try{
        await newuser.save();
        res.send("user added successfully");
    }catch(err){
        res.status(400).send("bad request"+err.message);
    }
});
connectdb()
 .then(()=>{ 
    console.log("database connection successful");
    app.listen(7777,()=>{
    console.log("server is successfully running on port 7777");
});
}).catch((err)=>{ 
    console.error("database cannot be connected"); 
});










/*app.get("/getuserdata",(req,res)=>{
    try{
    throw new error("uihkfkdnv");
   res.send("user data sent");
    }
    catch(err){
        res.status(500).send("error occurered");
    }
});

app.use("/",(err,req,res,next)=>{
if(err){
    //log your errors
    res.status(500).send("unexpected error");
}
});


/*const { adminAuth ,userAuth}= require("./middlewares/auth");

app.use("/admin",adminAuth);
//app.use("/user",userAuth); // we can directly|write it inside route

app.use("/user",userAuth,(req,res)=>{//like this 
    res.send("user data sent")
});

app.use("/admin/getAlldata",(req,res)=>{
    res.send("All data Sent");
});

app.use("/admin/deleteAlldata",(req,res)=>{
    res.send("delete data");
});













/*app.use("/user",
    (req,res,next)=>{
    console.log("route handler 1");
    res.send("route 1");
    next();
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

app.get('/user/:id/:name/:password', (req,res)=>{ /// if we do http:localhost:7777/user/101/avi/45678 it give give id:101 name:avi... in console
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

