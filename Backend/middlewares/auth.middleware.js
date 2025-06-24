const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
//user authentication middleware
module.exports.authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized'});
    }

    const isblacklisted = await blacklistTokenModel.findOne({ token: token });

    if (isblacklisted) {
        return res.status(401).json({ message: 'Unauthorized'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user; // Attach user to request object
        return next(); // Proceed to the next middleware or route handler
    }
    catch (err){
        return res.status(401).json({ message: 'Unauthorized'});
    }
}