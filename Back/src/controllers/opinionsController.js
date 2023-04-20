const { Opinions, Articles } = require("../db")

const {  getArticleById,} = require('../controllers/articlesController')

async function createOpinion( commentO, qualificationO, id) {
  const idExists = await getArticleById(id)

  const newOpinion = await Opinions.create({
    commentO: commentO,
    qualificationO: qualificationO,
    articleId: idExists.id_Article
  }, { 
    include: [{ 
      model: Articles
    }]
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
