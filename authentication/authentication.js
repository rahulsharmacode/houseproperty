
const jwt = require('jsonwebtoken');
const AdminData = require('../modle/adminSchema');
const authentication = async (req,res,next) =>{
    try{

        const token = req.headers['auth-token'];
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY)
        if(!verifyToken){
          return  res.status(404).json({status:false, message : `token validation failed`})
        }
        let findAdmin = await AdminData.findById({_id:verifyToken._id});
            req.userID = findAdmin._id;
            req.rootUser = findAdmin;
            req.token = token;
            next();
    }
    catch(err){
        res.send(err)
    }
}


module.exports = authentication;