const postModel = require('../models/postModel')
const aws = require('aws-sdk')

const uploadFile = async (files) => {

    return new Promise(function (resolve, reject) {
        aws.config.update({
            accessKeyId: "AKIAY3L35MCRZNIRGT6N",
            secretAccessKey: "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",
            region: "ap-south-1"
        })
        let s3 = new aws.S3({ apiVersion: '2006-03-01' });

        let uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket",
            Key: "TNAP/productManagement/" + files.originalname,
            Body: files.buffer
        }

        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ "error": err })
            }
            console.log("file uploaded succesfully")
            return resolve(data.Location)
        })
    })
}


const createPost = async (req,res) => {
    try {
        let data = req.body
        let files = req.files
        
        if(files && files.length>0){
            let uploadUrl = await uploadFile(files[0])
            data.image = uploadUrl
        }else{
            return res.status(400).send({status:false,message:"provide Image file"})
        }
    
        let final = await postModel.create(data)
        return res.status(201).send({status:true,data:final})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}


module.exports = {createPost}