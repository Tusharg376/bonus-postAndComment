const express = require("express")
const mongoose = require('mongoose')
const app = express()
const routes = require("./routes/route")

app.use(express.json())
mongoose.connect('mongodb+srv://honeygautam0:nB8CYVJgUWjqHkgK@cluster0.jlfkfzw.mongodb.net/bonusPostAndComment',{
    useNewUrlParser:true
})

.then(()=> console.log("database connected"))
.catch((err)=> console.log(err.message))

app.use('/',routes)

app.listen(3000, function(){
    console.log("server is connected")
})