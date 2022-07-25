const db = require('../database/models');

const categoryService = {
    create: async ({ id, name }) => {
        const category = await db.Category.create({
           id, name });
            return category;
    },
    listCategory: async () => {
        const categories = await db.Category.findAll();
        const getCategories = categories.map((category) => ({
            id: category.id,
            name: category.name,
        }));
        return getCategories;
    },
    checkCategory: async ({ categoryId }) => {
        const check = await db.Category.findByPk(categoryId);
        return check;
    },
};

module.exports = categoryService;