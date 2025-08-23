const validator=require('validator');

const validatesignupdata = (req)=>{
    const{firstName, lastName, id , password}=req.body;

    if(!firstName || !lastName){
        throw new Error("please enter valid name");
    }
    else if(!validator.isEmail(id)){
        throw new Error("email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("please enter strong password");
    }

}
module.exports={
    validatesignupdata,
}