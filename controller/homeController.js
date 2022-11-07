const HomeData = require("../modle/homeSchema");
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

const homeGet = async (req,res) =>{
    try{
        let allHomepage = await HomeData.find()
        if(allHomepage){
            res.status(200).json({status:true , message : `success` , data : allHomepage});
        }
        else{
            res.status(400).json({status:false , message : `failed`});
        }

    }
    catch(err){
        res.send(err)
    }
}

const homePost = async (req,res) =>{
    try{
        let countHome = await HomeData.countDocuments();
        if(countHome>0){
            return res.status(404).json({status:true , message : `failed, can't crated duplicate homepage`});
        }
        else{
            let file1 = null;
            if(req.file){
                file1 = `${process.env.UPLOADIMGURL}`+req.file.filename;
            }
            let newHome = new HomeData({
                title,
                big_title,
                sub_title,
                bannerImage : file1
                });

                let resHome = await newHome.save();
                if(resHome){
                    res.status(200).json({status:true , message : `success` , data : resHome});
                }
                else{
                    res.status(400).json({status:false , message : `failed`});
                }

        }
    }
    catch(err){
        res.send(err)
    }
}

const homePut = async (req,res) =>{
    try{
        console.log('operation phase 1')
        let updateHome = await HomeData.findById({_id:req.params.id})
        console.log(updateHome,'operation phase 2')

        if(updateHome){
            let file1 = null;
            if(req.file){
                file1 = `${process.env.UPLOADIMGURL}`+req.file.filename;
                deletefile(updateHome.bannerImage)
            }
            updateHome.title = req.body.title || updateHome.title;
            updateHome.big_title = req.body.big_title || updateHome.big_title;
            updateHome.sub_title = req.body.sub_title || updateHome.sub_title;
            updateHome.bannerImage = file1 || updateHome.bannerImage;
            await findProduct.save();
            res.status(200).json({status:true , message : `updation success`});
        }
        else{
            res.status(400).json({status:true , message : `product not found`});
        }
    }
    catch(err){
        res.send(err)
    }
}


module.exports = {homeGet,homePost,homePut}

