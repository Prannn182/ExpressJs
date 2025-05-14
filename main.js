const express=require("express");
const app=express();
const port=5000;
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    let sitename="Adidas";
    let sitetext="search now";
    let arr=[45,68.98]
    res.render("index",{sitename:sitename,sitetext:sitetext,arr});//use to render a view template 
})
// app.post('/',(req,res)=>{
//     res.send('Hello World! from post');
// })
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})