const articlesRoute = require('express').Router()

const {
    getAllArticlesHandler,
    getArticleByIdHandler,
    getArticleByNameHandler,
    createArticleHandler,
} = require('../handlers/articlesHandler')

articlesRoute.get('/', getAllArticlesHandler)
articlesRoute.get('/:id', getArticleByIdHandler)
articlesRoute.get('/', getArticleByNameHandler)
articlesRoute.post('/register', createArticleHandler)

module.exports = articlesRoute