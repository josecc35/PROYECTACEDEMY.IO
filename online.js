const path = require('path') // el path nos ayuda acceder a nuestro dico
const express = require('express')
const logger = require('morgan')
const bodyParse = require('body-parser')
const online = express()
const indexRoutes =require('./src/routes/index')

online.set('port', process.env.PORT || 3000 )
online.set('views', path.join(__dirname, 'src/views'))
online.set('view engine','ejs') //motor de vista

online.use(logger('dev'))
online.use(express.json())
online.use(bodyParse.urlencoded({extended:false}))

online.use('/', indexRoutes) // redirije la llamada a indexRoutes

online.listen(online.get('port'), () =>{
    console.log("servidor en Puerto", online.get('port'))
})