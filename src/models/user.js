const mongoose= require('mongoose');
const validator = require('validator');

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
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
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new error("Gender is not valid");
            }
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

module.exports=mongoose.model("User",userSchema);