const mongoose  = require('mongoose');

const homeSchema = new mongoose.Schema({
    title:String,
    big_title:String,
    sub_title:Number,
    bannerImage:String,
})


const HomeData = mongoose.model('homepage', homeSchema)
module.exports = HomeData;