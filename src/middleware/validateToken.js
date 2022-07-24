const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
    const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
   }
   next();
};

module.exports = validateToken;