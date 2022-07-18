const jwt = require('jsonwebtoken');
require('dotenv');

const secret = process.env.JWT_SECRET;

const jwtService = {
    createToken: (data) => {
        const token = jwt.sign(data, secret);
        return token;
    },
};
module.exports = jwtService;