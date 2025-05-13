const express = require("express");
const app = express();
const port = 5000;

// app.use(express.static('public'));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello worrrrrrrrrld pranali");
  console.log("hey its a get request");
});

app.post("/", (req, res) => {
  res.send("Hello worrld ");
  console.log("hey its a post request");
});

app.put("/", (req, res) => {
  res.send("Hello worrld puuu");
  console.log("hey its a put request");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//Chaining of request
app.get("/index",(req,res) => {
  res.sendFile('templates/index.html',{root:__dirname});
  //res.status() res.download() res.end() res.json() res.redirect()
  console.log("hey its a index request");
});
