const categoryService = require('../services/categoryService');
const postService = require('../services/postService');

const postController = {
    create: async (req, res) => {
    const { title, content, categoryIds } = req.body;
        if (!title || !content || !categoryIds) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }
    const checkIdCat = await categoryService.checkCategory({ categoryIds });
        if (!checkIdCat) {
            return res.status(400).json({ message: '"categoryIds" not found' });
        }
        const newpost = await postService.create({ title, content, categoryIds });
       
        return res.status(201).json({ newpost });
    },
    list: async (_req, res) => {
        const posts = await postService.list();
        res.status(200).json(posts);
    },
};
module.exports = postController;