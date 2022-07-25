// const Joi = require('joi');
const db = require('../database/models');

const userService = {
    listUsers: async () => {
        const getUsers = await db.User.findAll({
            attributes: { exclude: ['password'] },
        });
        return getUsers;
    },
   
    checkUser: async ({ email }) => {
        const user = await db.User.findOne({ where: { email } });
            return user;
    },

    create: async ({ displayName, email, password, image }) => {
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },
    findById: async (id) => {
        const user = await db.User.findByPk(id, {
            attributes: { exclude: ['password'] },
        });
        return user;
    },

};

module.exports = userService;