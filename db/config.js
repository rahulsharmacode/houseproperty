const mongoose  = require('mongoose')

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`db connected`)
}).catch((err)=>{
    console.log(`db not connected error : ${err}`)
})