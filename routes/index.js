const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
});


// router.get('/', (req, res, next) => {
//   console.log('get /');
//   res.render('../views/index.ejs');
//   next();
// });


// Product.find((error, data) => {
//     if(error)
//         console.log(error);
//     else
//         console.log(data);
// });

// router.get('/', (req, res) => {
//     const text1 = "Hello app.js";
//     res.render('index', {text : text1});
// });

module.exports = router;