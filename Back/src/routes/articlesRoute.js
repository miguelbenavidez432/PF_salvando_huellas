const articlesRoute = require('express').Router()

const {
  getAllArticlesHandler,
  getArticleByIdHandler,
  createArticleHandler,
  updateArticleHandler,
  getAllArticlesDescHandler,
  getAllArticlesPriceAscHandler,
  getAllArticlesPriceDescHandler,
  deleteArticleHandler,
  getAllArticlesAscHandler,
} = require('../handlers/articlesHandler')

// Routes
articlesRoute.get('/', getAllArticlesHandler)
articlesRoute.get('/desc', getAllArticlesDescHandler)
articlesRoute.get('/asc', getAllArticlesAscHandler)
articlesRoute.get('/priceasc', getAllArticlesPriceAscHandler)
articlesRoute.get('/pricedesc', getAllArticlesPriceDescHandler)
articlesRoute.get('/:id', getArticleByIdHandler)
articlesRoute.post('/register', createArticleHandler)
articlesRoute.put('/update/:id', updateArticleHandler)
articlesRoute.delete('/delete/:id', deleteArticleHandler)

module.exports = articlesRoute