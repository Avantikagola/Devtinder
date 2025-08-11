const express = require('express'); // require our express from node module

const app = express(); //creating a new application of express

// this will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Avantika", lastName: "Gola" });
});

app.post("/user", (req, res) => {
    // saving data to DB
    res.send("Data successfully saved to the database!");
});

app.delete("/user", (req,res)=>{
    res.send("deleted successfully");
});
// this will match all the HTTP method API call to /test 
app.use("/test",(req,res)=>{
   res.send("hello hello ");
});

app.listen(7777,()=>{
    console.log("server is successfully running on port 7777");
});