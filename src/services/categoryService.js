const db = require('../database/models');

const categoryService = {
    create: async ({ id, name }) => {
        const category = await db.Category.create({
           id, name });
            return category;
    },
    listCategory: async () => {
        const getCategories = await db.Category.findAll();
        return getCategories;
    },
    checkCategory: async ({ categoryId }) => {
        const check = await db.Category.findByPk(categoryId);
        return check;
    },
};

module.exports = categoryService;