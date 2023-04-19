const articlesRoute = require('express').Router()

const {
    getAllArticlesHandler,
    getArticleByIdHandler,
    getArticleByNameHandler,
    createArticleHandler,
    deleteArticleHandler,
    updateArticleHandler,
} = require('../handlers/articlesHandler')

const { createOpinionHandler, getAllOpinionsHandler } = require('../handlers/opinionsHandler')

articlesRoute.get('/', getAllArticlesHandler)
articlesRoute.get('/:id', getArticleByIdHandler)
articlesRoute.get('/', getArticleByNameHandler)
articlesRoute.post('/register', createArticleHandler)
articlesRoute.delete('/delete/:id', deleteArticleHandler)
articlesRoute.put('/:id', updateArticleHandler)

articlesRoute.post('/register', createOpinionHandler)
articlesRoute.get('/opinions', getAllOpinionsHandler)

module.exports = articlesRoute