require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const miniwpRoutes = require('./routes/miniwproutes')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect(`${process.env.MONGO_DB}-miniwp`, { useNewUrlParser: true })
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/', miniwpRoutes)
app.listen(port, function(){
    console.log(`listening on port ${port}`);
    
})

