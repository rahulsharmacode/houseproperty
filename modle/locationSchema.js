const mongoose  = require('mongoose');

const productLocationSchema = new mongoose.Schema({
    location:String
})


const pLocationData = mongoose.model('productLocation', productLocationSchema)
module.exports = pLocationData;