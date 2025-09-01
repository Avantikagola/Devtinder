const express= require("express");

const authRouter = express.Router();
const {validatesignupdata}=require("../utils/validation");
const User=require("../models/user");
const bcrypt=require("bcrypt");
const jwt= require('jsonwebtoken');
const cookieParser= require('cookie-parser');

authRouter.post("/signup",async(req,res)=>{
    
   try{ 
    //validation of data L-09
     validatesignupdata(req);

    //encrypting the password L-09
     const {firstName, lastName, id, password} = req.body;

     const hashPassword= await bcrypt.hash(password,10);
     console.log(hashPassword);
 
    //console.log(req.body);
    //creating the new instance of user model
    const newuser=new User({
        firstName,
        lastName,
        id,
        password: hashPassword,
    });//creating new user with userObj data
    
        await newuser.save();
        res.send("user added successfully");
    }catch(err){
        res.status(400).send("bad request"+ err.message);
    }
});

authRouter.post("/login",async(req,res)=>{
   try {
    const { id, password } = req.body;

    const user = await User.findOne({ id: id });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("login successfully");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/logout",async(req,res)=>{
 res.cookie("token",null,{
    expires: new Date(Date.now()),
 });
 res.send("Logout Successful!!!");
});
module.exports = authRouter;