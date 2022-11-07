const mongoose  = require('mongoose');

const productTypeSchema = new mongoose.Schema({
    type:String,
})


const pTypeData = mongoose.model('productType', productTypeSchema)
module.exports = pTypeData;