const mongoose= require('mongoose');
const validator = require('validator');
const jwt= require("jsonwebtoken");
const bcrypt=require("bcrypt");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        index:true,
        minLength:4,
        maxLength:50,
    },
    lastName:{
        type:String
    },
    id:{
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail){
                throw new error("emailid is not valid"+value);
            }
        },   
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        enum:{
            values:["male","female","other"],   
            message: `{VALUE } is not a valid gender type`        
           },
        },
    photUrl:{
        type:String
    },
    about:{
        type:String,
        default:"This is the default about of array",
    },
    skills:{
        type:[String],
    },
    createdAt:{
        type:Date,
    }
},
{
    timestamps:true,
}
);

userSchema.methods.getJWT = async function(){
    const user=this;

    const token=await jwt.sign({_id: user._id},"DEVtinder$@234",{
        expiresIn:"7d",
    });

    return token;
};
userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );

  return isPasswordValid;
};
module.exports=mongoose.model("User",userSchema);