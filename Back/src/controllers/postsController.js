const { Posts } = require('../db')
const { Op, where } = require("sequelize")

const createPost = async (titleP, commentP, category, photoP, userId) => {
    const newPost = await Posts.create({
        titleP: titleP, 
        commentP: commentP, 
        category: category,
        photoP: photoP,
        userId: userId
      })
    
    return newPost
}

const getAllPosts = async () => {
    const allUsers = await Posts.findAll({
      where: {
        isActive: true
      }
    })
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
          isActive: true
        },
      })
      return postByTitle
}

const deletePost = async (id) => {
    await Posts.update({
      isActive: false
    },{
        where: {
          id_Post: {
            [Op.eq]: id,
          },
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
