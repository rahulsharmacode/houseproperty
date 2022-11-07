const mongoose  = require('mongoose');

const productRangeSchema = new mongoose.Schema({
    min_price:Number,
    max_price:Number
})


const pRangeData = mongoose.model('productRange', productRangeSchema)
module.exports = pRangeData;