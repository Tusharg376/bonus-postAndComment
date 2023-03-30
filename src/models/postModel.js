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
    comments:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports = mongoose.model('post',postSchema)