const express = require("express");
const app = express();
const port = 5000;

// app.use(express.static('public'));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello worrrrrrrrrld");
  console.log("hey its a get request");
});

app.post("/", (req, res) => {
  res.send("Hello worrld");
  console.log("hey its a post request");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
