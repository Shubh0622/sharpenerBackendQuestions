const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('Inside middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('inside another middleware');
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(4000);