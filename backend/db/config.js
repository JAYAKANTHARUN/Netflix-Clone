const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (err){
        console.log('error : ' + err)
    }
    else{
        console.log('database connected successfully')
    }
})