const articlesRoute = require('express').Router()

const {
    getAllArticlesHandler,
    getArticleByIdHandler,
    createArticleHandler,
    updateArticleHandler,
    deleteArticleHandler,
} = require('../handlers/articlesHandler')

const { createOpinionHandler, getAllOpinionsHandler } = require('../handlers/opinionsHandler')

articlesRoute.get('/', getAllArticlesHandler)
articlesRoute.get('/:id', getArticleByIdHandler)
articlesRoute.post('/create', createArticleHandler)
articlesRoute.put('/update/:id', updateArticleHandler)
articlesRoute.delete('/delete/:id', deleteArticleHandler)

articlesRoute.post('/register', createOpinionHandler)
articlesRoute.get('/opinions', getAllOpinionsHandler)

module.exports = articlesRoute