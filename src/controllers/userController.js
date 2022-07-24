const userService = require('../services/userService');
const validationEmail = require('../services/utils');
const jwtService = require('../services/jwtService');

const errorName = '"displayName" length must be at least 8 characters long';
const errorPass = '"password" length must be at least 6 characters long';
const errorEmail = '"email" must be a valid email';

const userController = {
    create: async (req, res) => {
        const { displayName, email, password, image } = req.body;
        const token = await jwtService.authToken(email);

        if (displayName.length < 8) {
            return res.status(400).json({ message: errorName });
        }

        if (password.length < 6) { 
            return res.status(400).json({ message: errorPass });
        }

        if (!validationEmail(email)) {
            return res.status(400).json({ message: errorEmail });
        }

        const user = await userService.checkUser({ email });
        if (user) {
            return res.status(409).json({ message: 'User already registered' });
        }
        await userService.create({ displayName, email, password, image });

        res.status(201).json({ auth: true, token });
    },
    list: async (_req, res) => {
        const users = await userService.listUsers();
        res.status(200).json(users);
      },
    
};

module.exports = userController;