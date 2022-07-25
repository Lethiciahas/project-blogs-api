const db = require('../database/models');
const PostCategory = require('../database/models/postCategory');

const postService = {
    create: async ({ title, content, categoryId, userId, id, postId }) => {
        const createPost = await db.BlogPost.create({ title, content, userId });
        const dataCat = await db.PostCategory.create({
            postId, categoryId,
        });
        await createPost.addPostCategory(dataCat);
        const result = await db.BlogPost.findOne({
            where: { postId: id }, include: PostCategory,
        });
        console.log(result);
    },
    list: async () => {
        const listPosts = await db.BlogPost.findAll({
            include: [
                { model: db.User, as: 'user', attributes: { exclude: ['password'] } },
                { model: db.Category, as: 'categories' },
            ],
        });
          return listPosts;
        },

};

module.exports = postService;