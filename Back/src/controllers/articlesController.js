const { Articles, Opinions } = require('../db')
const { Op } = require("sequelize")

// Function: get all active articles
async function getAllArticles() {
  const allArticles = await Articles.findAll({
    where: {
      activeA: true
    },
  })
  return allArticles
}

// Function: get an article by name active
async function getArticleByName(nameA) {
  const articleByName = await Articles.findAll({
    where: {
      nameA: { [Op.like]: `%${nameA}%` },
    },
  })
  if (articleByName.activeA === true) return articleByName
}

// Function: get an article by Id active
async function getArticleById(id) {
  const article = await Articles.findByPk(id)
  if (article.activeA === true) return article
}

// Function: Create an article
async function createArticle(nameA, priceA, descriptionA, photoA, stockA, activeA) {
  const newArticle = await Articles.create({
    nameA: nameA,
    priceA: priceA,
    descriptionA: descriptionA,
    photoA: photoA,
    stockA: stockA,
    activeA: activeA
  })
  return newArticle
}

// Function: update an article specified by id active
const updateArticle = async (id, nameA, priceA, descriptionA, photoA, stockA, activeA) => {
  await Articles.update({
    nameA: nameA,
    priceA: priceA,
    descriptionA: descriptionA,
    photoA: photoA,
    stockA: stockA,
    activeA: activeA
  }, {
    where: {
      id_Article: {
        [Op.eq]: id
      }
    }
  })
}

// Function: delete(active:false) an article according to the id
const deleteArticle = async (id, activeA) => {
  await Articles.update({
    activeA: false
  }, {
    where: {
      id_Article: {
        [Op.eq]: id,
      }
    }
  })
}


// Function: get all active articles in order by name desc
async function getAllArticlesDesc() {
  const allArticlesDesc = await Articles.findAll({
    where: {
      activeA: true
    },
    order: [
      ['nameA', 'DESC'],
    ],
  })
  return allArticlesDesc
}
// Function: get all active articles in order by name asc
async function getAllArticlesAsc() {
  const allArticlesAsc = await Articles.findAll({
    where: {
      activeA: true
    },
    order: [
      ['nameA', 'ASC'],
    ],
  })
  return allArticlesAsc
}

// Function: get all active articles in order by price asc
async function getAllArticlesPriceAsc() {
  const allArticlesPriceAsc = await Articles.findAll({
    where: {
      activeA: true
    },
    order: [
      ['priceA', 'ASC'],
    ],
  })
  return allArticlesPriceAsc
}

// Function: get all active articles in order by price desc
async function getAllArticlesPriceDesc() {
  const allArticlesPriceDesc = await Articles.findAll({
    where: {
      activeA: true
    },
    order: [
      ['priceA', 'DESC'],
    ],
  })
  return allArticlesPriceDesc
}

module.exports = {
  getAllArticles,
  getArticleById,
  getArticleByName,
  createArticle,
  deleteArticle,
  updateArticle,
  getAllArticlesDesc,
  getAllArticlesAsc,
  getAllArticlesPriceAsc,
  getAllArticlesPriceDesc,
}
