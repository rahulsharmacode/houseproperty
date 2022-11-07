const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');
const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String,
    tokens : [{
        token : {
            type : String
        }
    }]
})


adminSchema.methods.generateAuthToken = async function(){
    console.log('entered p1')
    const user = this;
    let token = jwt.sign({_id:user._id}, process.env.SECRET_KEY)
    console.log('entered p2',token)
    user.tokens = user.tokens.concat({token:token})
    await user.save()
    return token;
}

const AdminData = mongoose.model('admin', adminSchema)
module.exports = AdminData;