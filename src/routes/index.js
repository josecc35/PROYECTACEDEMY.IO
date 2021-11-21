const { render } = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()

router.get('/' , (req,res) => {
    res.render('index') // la rendirezacion al index.js
})
 
module.exports = router; // Devuelve la respuesta al servidor express
