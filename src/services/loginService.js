const db = require('../database/models');

const loginService = {
    checkExists: async (email) => {
        const user = await db.User.findOne({ where: { email } });
        return user;
    },

};

module.exports = loginService;