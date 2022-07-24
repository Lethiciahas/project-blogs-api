const categoryService = require('../services/categoryService');

const errorName = '"name" is required';

const categoryController = {
    create: async (req, res) => {
        const { id, name } = req.body;
        if (!name) {
            return res.status(400).json({ message: errorName });
        }

        await categoryService.create({ id, name });
        res.status(201).json({ id, name });
    },
    list: async (_req, res) => {
        const categories = await categoryService.listCategory();
        res.status(200).json(categories);
    },
    
};
module.exports = categoryController;