const { Posts } = require('../db');
const { Op } = require("sequelize");

const createPost = async (titleP, commentP, category) => {
    const newPost = await Posts.create({
        titleP: titleP, 
        commentP: commentP, 
        category: category,})
    
    return newPost
}

const getAllPost = async () => {
    const allUsers = await Posts.findAll();
    return allUsers;
}

const getPostById = async (id) => {
    const user = await Posts.findByPk(id);
    return user;
}

const getPostByTitle = async (titleP) => {
    const postByTitle = await Posts.findAll({
        where: {
            titleP: {
            [Op.like]: `%${titleP}%`,
          },
        },
      });
      return postByTitle;
}

module.exports = {
    getAllPost,
    getPostById,
    getPostByTitle,
    createPost
  };
  