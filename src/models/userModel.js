const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    title :{
        type:String,
        enum:["Mr","Mrs","Miss"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model('user',userSchema)