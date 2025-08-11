const express = require('express'); // require our express from node module

const app = express(); //creating a new application of express

app.use(express.json());

app.get("/user/:id/:name/:password", (req,res)=>{ /// if we do http:localhost:7777/user/101/avi/45678 it give give id:101 name:avi... in console
    console.log(req.params);
    res.send("hiii abc");
});
app.get("/ab?c", (req,res)=>{ /// it will give same response even we write /abc, /ac means b is optional
     res.send("hiii abc");
});

app.get("/xy+z", (req,res)=>{// it will give same response if we do /xyz, /xyyyyyz, but not if /xyyyzz
   res.send("hii xyz");
});

app.get("/lm*no", (req,res)=>{// it will give same response if we do /lmno, /lmavantikano,/lmajsgdugduno but not if /xyyyzz
   res.send("hii xyz");
});

app.listen(7777,()=>{
    console.log("server is successfully running on port 7777");
});