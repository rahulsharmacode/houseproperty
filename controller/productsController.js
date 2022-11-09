const ProductData = require("../modle/productSchema")
const fs = require('fs')

const deletefile  =  (imagename) =>{
    fs.unlink(imagename.replace(`${process.env.UPLOADIMGURL}` , `public/uploads/`) , (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(`${imagename} file deleted`)
        }
    })
}

const productGet = async (req,res) =>{
    try{
        let allProducts = await ProductData.find()
        if(allProducts){
            res.status(200).json({status:true , message : `success` , data : allProducts});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productPost = async (req,res) =>{
    try{

        let file1 = null;
        if(req.file){
            file1 = `${process.env.UPLOADIMGURL}`+req.file.filename;
        }
        let {title,
            address,
            price,
            discription,
            type} = req.body;

            let newProduct = new ProductData({
            title,
            address,
            price,
            discription,
            type,
            image : file1
            });

            let resNewProduct = await newProduct.save();

            if(resNewProduct){
                res.status(200).json({status:true , message : `success` , data : resNewProduct});
            }
            else{
                res.status(400).json({status:false , message : `failed`});
            }
    }
    catch(err){
        res.send(err)
    }
}

const productPut = async (req,res) =>{
    try{
        console.log(req.body, 'operation phase 1 update')
        let findProduct = await ProductData.findById({_id:req.params.id})
        console.log(findProduct,'operation phase 2')

        if(findProduct){
            let file1;
            if(req.file){
                file1 = `${process.env.UPLOADIMGURL}`+req.file.filename;
                console.log(file1 , '==========file1=========')
               if(findProduct.image) {deletefile(findProduct.image);} 
            }
            console.log(file1 , '==========file1 p2=========')

            findProduct.title = req.body.title || findProduct.title;
            findProduct.address = req.body.address || findProduct.address;
            findProduct.price = req.body.price || findProduct.price;
            findProduct.discription = req.body.discription || findProduct.discription;
            findProduct.type = req.body.type || findProduct.type;
            findProduct.image = file1 || findProduct.image;
            await findProduct.save();
            res.status(200).json({status:true , message : `updation success`});
        }
        else{
            res.status(400).json({status:false , message : `product not found`});
        }
    }
    catch(err){
        res.send(err)
    }
}

const productDelete = async (req,res) =>{
    try{
        const deleteProduct = await ProductData.findByIdAndDelete({_id:req.params.id})
        if(deleteProduct){
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

const searchGet = async (req,res) =>{
    try{

        // const searchProduct = await ProductData.aggregate([
        //     {
        //         $match : {
        //              $and:  [req.body]
                     
        //         }
        //     } 
        // ])

        const searchProduct = await ProductData.find({
            $and:  [req.body]
        })
      
        if(searchProduct){
            res.status(200).json({status:true, message:'success' , data : searchProduct})
        }
        else{
            res.status(400).json({status:false, message:'failed'})

        }

    }
    catch(err){
        console.log(err)
    }
}


module.exports = {productGet,productPost,productPut,productDelete,searchGet}

