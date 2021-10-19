const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    _id:mongoose.Schema.type.ObjectId,
    
    email:{
        type: String,
        require:true,
        unique: true
    },
    
    
})
const User = mongoose.model('User',UserSchema);
module.exports = User;