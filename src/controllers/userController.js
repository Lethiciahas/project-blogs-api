const usersService = require('../services/userService');

const usersController = {
    create: async (req, res) => {
        const { displayName, email, password, image } = req.body;
        if (displayName.length < 8) { 
            return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }
            await usersService.create();

        res.status(201).json({ displayName, email, password, image });
    },
};

module.exports = usersController;