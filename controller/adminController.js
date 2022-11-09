const AdminData = require("../modle/adminSchema");

const adminLogin = async (req,res) =>{
    try{
        let {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({status:false, message : `some fields are missing`})
        }
        else{
            let findAdmin = await AdminData.findOne({email});
            if(findAdmin){
                if(findAdmin.password === password){
                    let token = await findAdmin.generateAuthToken();
                    res.status(200).json({status:true, message : `login success` , token:token})
                }
                else{
                  return  res.status(406).json({status:false, message : `account details didn't match`})
                }
            }   
            else{
                return  res.status(404).json({status:false, message : `account details didn't match`})
            }
        }
    }
    catch(err){
        res.send(err)
    }
}


const adminRegister = async (req,res) =>{
    try{
        let {name,
            email,
            password,
            cpassword} = req.body;

            if(!name || !email || !password || !cpassword){
                return res.status(400).json({status:false, message : `some fields are missing`}) 
            }
            else{
                
                if(password !== cpassword){
                return res.status(400).json({status:false, message : `password & confirm password didn't match`}) 
                }

                let checkEmail = await AdminData.findOne({email:email});
                if(checkEmail){
                return res.status(400).json({status:false, message : `email address already exists`}) 
                }

                else{
                    let newLog = new AdminData({
                        name,
                        email,
                        password,
                        cpassword
                    })

                    await newLog.save();
                    res.status(200).json({status:false, message : `user registration success` , data:newLog}) 
                }
            }
    }
    catch(err){
        res.send(err)
    }
}

module.exports = {adminLogin,adminRegister}