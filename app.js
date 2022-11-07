require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app =  express();

require('./db/config')
const userRouter = require('./router/userRouter')


app.use(express.static('./public'))
app.use(express.json())
app.use(userRouter);
app.use(cors({
    origin : "http://localhost:3000"
}))


app.get('/' , (req,res)=>{
    res.send('ok props cjeck');
})


app.listen(process.env.PORT, ()=>{
    console.log(`app running at port ${process.env.PORT}`)
})
