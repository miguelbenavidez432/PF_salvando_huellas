const { Posts } = require('../db')
const { Op } = require("sequelize")

const createPost = async (titleP, commentP, category) => {
    const newPost = await Posts.create({
        titleP: titleP.toLowerCase(), 
        commentP: commentP, 
        category: category,})
    
    return newPost
}

const getAllPosts = async () => {
    const allUsers = await Posts.findAll()
    return allUsers
}

const getPostById = async (id) => {
    const user = await Posts.findByPk(id)
    return user
}

const getPostByTitle = async (titleP) => {
    const postByTitle = await Posts.findAll({
        where: {
            titleP: {
            [Op.like]: `%${titleP}%`,
          },
        },
      })
      return postByTitle
}

const deletePost = async (id) => {
    await Posts.destroy({
        where: {
          id_Post: {
            [Op.eq]: id,
          }
        }
      })
}

const updatePost = async (id, titleP, commentP, category, photoP) => {
    await Posts.update({
        titleP: titleP.toLowerCase(),
        commentP: commentP,
        category: category,
        photoP: photoP,
    }, {
        where: {
          id_Post: {
            [Op.eq]: id,
          }
        }
      })
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostByTitle,
    createPost,
    deletePost,
    updatePost,
  }
  