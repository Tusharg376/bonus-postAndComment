const userModel = require('../models/userModel')

const createUser = async function(req,res){
   try {
     let data = req.body
     if(!data.name || !data.title || !data.email || !data.phone || !data.password) return res.status(400).send({status:false,message:"credential missing"})
 
     let check = await userModel.findOne({$or:[{email:data.email},{phone:data.phone}]})
     if(check.email == data.email) return res.status(400).send({status:false,message:"unique email is required"}) 
     if(check.phone == data.phone) return res.status(400).send({status:false,message:"unique phone is required"}) 
     
     let final = await userModel.create(data)
     res.status(200).send({status:true,data:final})
   } catch (error) {
        return res.status(500).send({status:false,message:error.message})
   }
}

module.exports = {createUser}