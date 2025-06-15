const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        minlength:[3, 'First name must be at least 3 characters long'],
    },
    lastname: {
        type: String,
        minlength:[3, 'Last name must be at least 3 characters long'],
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select: false, // Do not return password by default
    },
    socketId: {    //going to use this for live tracking //captain ya driver ki live location share kr ske user s
        type: String
    },
    

})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;