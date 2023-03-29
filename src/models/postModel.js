const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})