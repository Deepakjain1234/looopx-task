const mongoose = require('mongoose')

const DBconnect = async ()=>{
    mongoose.connect(process.env.DB_URL,()=>{
        console.log("Established MongoDB connection!!");
    })
}


module.exports = DBconnect;