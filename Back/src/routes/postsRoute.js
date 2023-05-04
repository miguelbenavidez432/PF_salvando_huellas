const postsRoute = require('express').Router()
const {
    getAllPostsHandler,
    getPostByIdHandler,
    createPostHandler,
    updatPostHandler,
    deletePostHandler,
} = require('../handlers/postsHandler')
const authjwt = require('../Middleware/authjwt')

postsRoute.get('/', getAllPostsHandler)
postsRoute.get('/:id', getPostByIdHandler)
postsRoute.post('/register', createPostHandler)
postsRoute.put('/update/:id', updatPostHandler)
postsRoute.delete('/delete/:id', deletePostHandler)

module.exports = postsRoute
