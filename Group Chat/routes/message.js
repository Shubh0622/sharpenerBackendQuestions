const fs = require('fs');

const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    // res.send("<p>No message</p>");
    fs.readFile('messages.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='No Chat Exists'
        }
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="message">
        <input type="hidden" name="username" id="username"><br>
        <button type="submit">Send</button>
        </form>`);
    })
});

router.post('/',(req,res,next)=>{
    fs.writeFile("messages.txt",`${req.body.username}: ${req.body.message}`, {flag: "a"},(err)=>{
        err ? console.log(err) : res.redirect('/')
    })
});
module.exports = router;