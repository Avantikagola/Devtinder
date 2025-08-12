const adminAuth=(req,res,next)=>{
    const token="abcaaaa";
    const isAdminAuthorized= token ==="abc";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
};

const userAuth=(req,res,next)=>{
    const token="abcaaaa";
    const isAdminAuthorized= token ==="abc";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
};

module.exports={
    adminAuth,
    userAuth
};