const mongoose  = require('mongoose');

const productSchema = new mongoose.Schema({
    title:String,
    address:String,
    price:Number,
    image:String,
    discription:String,
    type:String
})


const ProductData = mongoose.model('product', productSchema)
module.exports = ProductData;