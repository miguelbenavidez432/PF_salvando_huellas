const { Opinions } = require("../db")

const {  getArticleById } = require('../controllers/articlesController')

async function createOpinion( commentO, qualificationO, id, userId) {
  const idExists = await getArticleById(id)
  console.log(idExists)
  const newOpinion = await Opinions.create({
    commentO: commentO,
    qualificationO: qualificationO,
    articleId: id,
    userId: userId
  })
  return newOpinion
}

async function getAllOpinions() {
  const allOpinions = await Opinions.findAll()
  return allOpinions
}

module.exports = {
  createOpinion,
  getAllOpinions,
}
