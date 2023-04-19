const articlesRoute = require('express').Router()

const {
    getAllArticlesHandler,
    getArticleByIdHandler,
    getArticleByNameHandler,
    createArticleHandler,
    deleteArticleHandler,
    updateArticleHandler,
} = require('../handlers/articlesHandler')

articlesRoute.get('/', getAllArticlesHandler)
articlesRoute.get('/:id', getArticleByIdHandler)
articlesRoute.get('/', getArticleByNameHandler)
articlesRoute.post('/register', createArticleHandler)
articlesRoute.delete('/delete/:id', deleteArticleHandler)
articlesRoute.put('/:id', updateArticleHandler)

module.exports = articlesRoute