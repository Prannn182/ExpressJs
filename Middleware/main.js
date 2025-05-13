const express = require("express");
const app = express();
const port = 5000;
const fs=require("fs")

// app.use(express.static('public'));
//app.use(express.static("public"));
app.use((req,res,next)=>{
    const now=new Date();
    const date = now.toLocaleDateString(); 
  const time = now.toLocaleTimeString();
    fs.appendFileSync("logs.txt",`${date}  and ${time} got a ${req.method} request\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next()
})
app.use((req,res,next)=>{
    console.log('m2');
    next() //to give controls to the next middleware or any other function
})

app.get("/", (req, res) => {
  res.send("Hello worrrrrrrrrld pranali");
  console.log("hey its a get request");
});

app.post("/", (req, res) => {
  res.send("Hello worrld ");
  console.log("hey its a post request");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//5 types of middleware:-
//1.application-level middleware
//2.router-level middleware
//3.error-handling middleware
//4.built-in middleware
//5. third-party middleware

