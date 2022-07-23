const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtService = {
    authToken: async (user) => {
        const token = jwt.sign({ data: user }, JWT_SECRET);
        return token;
    },

};

module.exports = jwtService;