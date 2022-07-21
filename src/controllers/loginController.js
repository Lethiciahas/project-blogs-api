const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const loginController = {
   login: async (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({ data: email }, JWT_SECRET, { expiresIn: 300 });
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await loginService.checkExists(email);
    if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json({ auth: true, token });
}, 
};

module.exports = loginController;