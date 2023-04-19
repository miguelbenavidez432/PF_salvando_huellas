const articlesRoute = require('express').Router()

const {
    getAllArticlesHandler,
    getArticleByIdHandler,
    createArticleHandler,
    updateArticleHandler,
    deleteArticleHandler,
} = require('../handlers/articlesHandler')

articlesRoute.get('/', getAllArticlesHandler)
articlesRoute.get('/:id', getArticleByIdHandler)
articlesRoute.post('/create', createArticleHandler)
articlesRoute.put('/update/:id', updateArticleHandler)
articlesRoute.delete('/delete/:id', deleteArticleHandler)

module.exports = articlesRoute