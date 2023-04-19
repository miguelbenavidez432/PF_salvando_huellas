const { Opinions, Articles } = require("../db")

async function createOpinion( commentO, qualificationO, id) {
  const newOpinion = await Opinions.create({
    commentO: commentO,
    qualificationO: qualificationO,
  }, { 
    include: [{ 
      model: Articles, 
      as: 'article', 
      foreignKey: 'articleIdArticle' 
    }]
  }
  )
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
