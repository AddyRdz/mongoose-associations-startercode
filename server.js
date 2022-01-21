const express = require('express')
const methodOverride = require('method-override')
const app = express()
const articlesController = require('./controllers/articles')
const authorsController = require('./controllers/authors')
const PORT = 8000

// Mongoose Config / Connection
const mongoose = require('mongoose')
const connectionString = "mongodb://127.0.0.1:27017/twoModelDB"

mongoose.connect(connectionString)
mongoose.connection.on('connected',()=>{
    console.log('connected to mongoDB: '+connectionString.split('/').pop())
})


//App Config
app.set('view engine', 'ejs')


//App Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


// Articles Controller
app.use('/articles', articlesController)
// Author Controller
app.use('/authors', authorsController)
// Home Route
app.get('/',(req,res)=>res.render('home'))
// 404 Page 
app.get('*',(req,res)=>res.render('404'))


//Server Initialization
app.listen(PORT,()=>console.log(`listening on ${PORT}`))