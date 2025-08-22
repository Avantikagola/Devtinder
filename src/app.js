const express = require('express'); // require our express from node module
const connectdb=require("./config/database");
const User=require("./models/user");
const user = require('./models/user');

const app = express(); //creating a new application of express

app.use(express.json());

//delete api
app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{
        const users=await User.findByIdAndDelete({_id:userId});
        res.send("user deleted successfully");
    }catch(err){
        res.status(400).send("something went wrong");
    }
});

//get one particular user data
app.get("/user",async(req,res)=>{
    const userpassword= req.body.password;
    try{
       const users=await User.find({password:userpassword});
       if(users.length===0){
             res.status(404).send("user not find");
       }
       else{
        res.send(users);
       }
    }
    catch(err){
       res.status(400).send("something went wrong");
    }
});

//FEED api -  get/feed - use to get user data on feed when you login (got all users from database)
app.get("/feed",async(req,res)=>{
    
    try{
       const users= await User.find({}); // empty filter send all the user detail
       res.send(users);
    }catch(err){
       res.status(400).send("something went wrong");
    }
});

//signup user api
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

//update data of the user
app.patch("/user/userId",async(req,res)=>{
    const userId= req.params?.userId;
   const data= req.body;
   try{
const ALLOWED_UPDATES=[
    "photoUrl",
    "skills",
    "about",
    "gender",
    "age",
    "userId"
];
    const isupdateAllowed=Object.keys(data).every((k)=>
        ALLOWED_UPDATES.includes(k)
    );
    if(!isupdateAllowed){
        throw new error("update not allowed");
    }
    const user= await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"before"}); // empty filter send all the user detail
       console.log(user);
       res.send("user updated successfully");
    }catch(err){
       res.status(400).send("something went wrong");
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

