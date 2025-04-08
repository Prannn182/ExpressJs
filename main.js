const express = require("express");
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Worrrrrrrrrrrrrrld');
});
app.get('/about', (req, res) => {
    res.send('Hello about me here');
});
app.get('/contact', (req, res) => {
    res.send('Hello contact');
});
app.get('/about/:slug',(req,res)=>{
    console.log(req);
    console.log(req.params); //will output(pages)
    console.log(req.query); //will output (modes vgrea)
    
    
    res.send(`hello ${req.params.slug}`);
})

app.listen(port, () => {
    console.log(`Example of port on ${port}`);
});
