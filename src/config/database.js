const mongoose= require('mongoose'); 

const connectdb= async() =>{ 
    await mongoose.connect(process.env.DB_CONNECTION_SECRET);
 }; 

 module.exports=connectdb;
