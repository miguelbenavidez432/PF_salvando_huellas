const articlesRoutes = require('express').Router()

const {
    getAllarticlesHandler,
    getArticleByIdHandler,
    getArticleByNameHandler,
    createArticleHandler,
} = require('../handlers/ArticlesHandlers')

articlesRoutes.get('/', getAllarticlesHandler)
articlesRoutes.get('/:id', getArticleByIdHandler)
articlesRoutes.get('/', getArticleByNameHandler)
articlesRoutes.post('/register', createArticleHandler)

module.exports = articlesRoutes