const express = require('express');
const router =express.Router();
const User= require("../model/user");
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is user get requset'
    })
})

router.post('/',(req,res,next)=>{
    const user= new User({
        _id:new mongoose.type.ObjectId,
        email:req.body.email
    })
    user.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newUser:result
        })

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    
})