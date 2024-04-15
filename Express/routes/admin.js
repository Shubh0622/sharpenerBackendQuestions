const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><label for="title">product</label><input type="text" name="title"><label for="quantity">quantity</label><input type="number" name="quantity"><button type="submit">Add Product</button></form>');
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.quantity);
    res.redirect('/');
})

module.exports = router;