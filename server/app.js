require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const miniwpRoutes = require('./routes/miniwproutes')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mini-wp', { useNewUrlParser: true })
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/', miniwpRoutes)
app.listen(port, function(){
    console.log(`listening on port ${port}`);
    
})

