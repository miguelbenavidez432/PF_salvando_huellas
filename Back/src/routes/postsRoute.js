const postsRoute = require('express').Router()
const {
    getAllPostsHandler,
    getPostByIdHandler,
    createPostHandler,
} = require('../handlers/postsHandler')

postsRoute.get('/', getAllPostsHandler)
postsRoute.get('/:id', getPostByIdHandler)
postsRoute.post('/create', createPostHandler)

module.exports = postsRoute