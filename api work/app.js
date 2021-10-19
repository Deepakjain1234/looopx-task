require('dotenv').config();
const DBconnect = require('./database/DBconnection')
const express = require('express')
const cors = require('cors')
const app =express();
const userroute=require('./api/routes/user')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.port
const app = express()
app.use(express.json())

app.use(cors())
try{
    DBconnect();
}catch(e){
    console.log(e)
}

app.use(bodyParser.urlencoded({extended:false}))
app.use('/user',userroute);
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`Backend running on http://localhost:${port}`)
})