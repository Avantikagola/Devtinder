const mongoose= require('mongoose'); 

const connectdb= async() =>{ 
    await mongoose.connect("mongodb+srv://avantikagola05:Avantika0641@avicluster.pv5gkjn.mongodb.net/devTinder");
 }; 

 module.exports=connectdb;
