const { Op } = require("sequelize")
const { Articles } = require('../db')

async function getAllArticles() {
  const allArticles = await Article.findAll()
  return allArticles
}

async function getArticleById(id) {
  const article = await Article.findByPk(id)
  return article
}

async function getArticleByName(name) {
  const articleByName = await Article.findAll({
    where: {
      nameA: {
        [Op.like]: `%${name}%`
      }
    }
  })
  return articleByName
}

async function createArticle(nameA, priceA, descriptionA, photoA){

        const newArticle = await Articles.create({
          nameA: nameA.toLowerCase(),
          priceA: priceA, 
          descriptionA: descriptionA,
          photoA: photoA,
        })
        return newArticle
}

module.exports = {
  getAllArticles,
  getArticleById,
  getArticleByName,
  createArticle,
}
