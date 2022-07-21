const usersService = require('../services/userService');

const usersController = {
    create: async (req, res) => {
        const { displayName, email, password, image } = req.body;

            const user = await usersService.create({ displayName, email, password, image });

        res.status(201).json(user);
    },
};

module.exports = usersController;