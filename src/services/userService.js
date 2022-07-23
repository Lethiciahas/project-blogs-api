// const Joi = require('joi');
const db = require('../database/models');

const userService = {
       checkUser: async ({ email }) => {
        const user = await db.User.findOne({ where: { email } });
            return user;
    },

    create: async ({ displayName, email, password, image }) => {
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },

};

module.exports = userService;