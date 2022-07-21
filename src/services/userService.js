const { User } = require('../database/models');

const userService = {
    create: async ({ displayName, email, password, image }) => {
        const user = await User.create({ displayName, email, password, image });
        return user;
    },

};
module.exports = userService;