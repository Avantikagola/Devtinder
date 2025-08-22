const mongoose= require('mongoose');

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
        type:string
    },
    about:{
        type:string,
        default:"This is the default about of array",
    },
    skills:{
        type:[string],
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