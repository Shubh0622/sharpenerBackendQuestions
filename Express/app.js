const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label for="title">product</label><input type="text" name="title"><label for="quantity">quantity</label><input type="number" name="quantity"><button type="submit">Submit</button></form>');
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.quantity);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send("<h1>Welcome to Express!</h1>");
})
app.listen(4000);