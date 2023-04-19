const { Articles } = require('../db')
const { Op } = require("sequelize")

async function createArticle(nameA, priceA, descriptionA, photoA, stockA){

  const newArticle = await Articles.create({
    nameA: nameA.toLowerCase(),
    priceA: priceA, 
    descriptionA: descriptionA,
    photoA: photoA,
    stockA: stockA
  })
  return newArticle
}

async function getAllArticles() {
  const allArticles = await Articles.findAll()
  return allArticles
}

async function getArticleById(id) {
  const article = await Articles.findByPk(id)
  return article
}

async function getArticleByName(nameA) {
  const articleByName = await Articles.findAll({
    where: {
      nameA: {
        [Op.like]: `%${nameA}%`,
      },
    },
  })
  return articleByName
}


const deleteArticle = async(id) =>{
  await Articles.destroy({
    where: {
      id_Article: {
        [Op.eq]: id,
      }
    }
  })
}

const updateArticle = async (id, nameA, priceA, descriptionA, photoA, stockA)  => {
  await Articles.update({ 
    nameA: nameA,
    priceA: priceA,
    descriptionA: descriptionA,
    photoA: photoA,
    stockA: stockA,
   }, {
    where: {
      id_Article: {
        [Op.eq]: id,
      }
    }
  });
}

module.exports = {
  getAllArticles,
  getArticleById,
  getArticleByName,
  createArticle,
  deleteArticle,
  updateArticle,
}
