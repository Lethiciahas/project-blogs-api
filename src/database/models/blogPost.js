const sequelize = require('sequelize');

const createBlogPost  = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published:DataTypes.DATE,
      updated:DataTypes.DATE
    },
    {
      timestamps: true,
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
      });

       BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey:'userId', as: 'User',
        });
    }
    return BlogPost;
  };

  module.exports = createBlogPost;