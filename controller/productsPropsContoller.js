const pLocationData = require("../modle/locationSchema");
const pRangeData = require("../modle/priceRangeSchema");
const pTypeData = require("../modle/productTypeSchema");

const locationGet = async (req,res) =>{
    try{
        let allLocation = await pLocationData.find()
        if(allLocation){
            res.status(200).json({status:true , message : `success` , data : allLocation});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const locationPost = async (req,res) =>{
    try{

            let newLocation = new pLocationData(req.body);
            let resNewLocation = await newLocation.save();
            if(resNewLocation){
                res.status(200).json({status:true , message : `success` , data : resNewLocation});
            }
            else{
                res.status(400).json({status:false , message : `failed`});
            }
    }
    catch(err){
        res.send(err)
    }
}

const locationPut = async (req,res) =>{
    try{
        let updateLocation = await pLocationData.updateOne({_id:req.params.id}, {
            $set : req.body
        })
        if(updateLocation){
            res.status(200).json({status:true , message : `updation success` , data : updateLocation});
        }
        else{
            res.status(400).json({status:false , message : `updation failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const locationDelete = async (req,res) =>{
    try{
        const deleteLocation = await pLocationData.findByIdAndDelete({_id:req.params.id})
        if(deleteLocation){
            res.status(200).json({status:true , message : `deletion success`});
        }
        else{
            res.status(400).json({status:false , message : `deletion failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}


const productTypeGet = async (req,res) =>{
    try{
        let allTypes = await pTypeData.find()
        if(allTypes){
            res.status(200).json({status:true , message : `success` , data : allTypes});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productTypePost = async (req,res) =>{
    try{
        let newType = new pTypeData(req.body);
        let resNewType = await newType.save();
        if(resNewType){
            res.status(200).json({status:true , message : `success` , data : resNewType});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productTypePut = async (req,res) =>{
    try{
        let updateType = await pTypeData.updateOne({_id:req.params.id}, {
            $set : req.body
        })
        if(updateType){
            res.status(200).json({status:true , message : `updation success` , data : updateType});
        }
        else{
            res.status(400).json({status:false , message : `updation failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productTypeDelete = async (req,res) =>{
    try{
        const deleteTypes = await pTypeData.findByIdAndDelete({_id:req.params.id})
        if(deleteTypes){
            res.status(200).json({status:true , message : `deletion success`});
        }
        else{
            res.status(400).json({status:false , message : `deletion failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}



const productRangeGet = async (req,res) =>{
    try{
        let allRanges = await pRangeData.find()
        if(allRanges){
            res.status(200).json({status:true , message : `success` , data : allRanges});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productRangePost = async (req,res) =>{
    try{
        let newRange = new pRangeData(req.body);
        let resNewRange = await newRange.save();
        if(resNewRange){
            res.status(200).json({status:true , message : `success` , data : resNewRange});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productRangePut = async (req,res) =>{
    try{
        let updateRange = await pRangeData.updateOne({_id:req.params.id}, {
            $set : req.body
        })
        if(updateRange){
            res.status(200).json({status:true , message : `updation success` , data : updateRange});
        }
        else{
            res.status(400).json({status:false , message : `updation failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productRangeDelete = async (req,res) =>{
    try{
        const deleteRange = await pRangeData.findByIdAndDelete({_id:req.params.id})
        if(deleteRange){
            res.status(200).json({status:true , message : `deletion success`});
        }
        else{
            res.status(400).json({status:false , message : `deletion failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}


module.exports = {locationGet,locationPost,locationPut,locationDelete,
    productTypeGet,productTypePost,productTypePut,productTypeDelete,
    productRangeGet,productRangePost,productRangePut,productRangeDelete
}

