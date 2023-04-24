const postsRoute = require('express').Router()
const {
    getAllPostsHandler,
    getPostByIdHandler,
    createPostHandler,
    updatPostHandler,
    deletePostHandler,
} = require('../handlers/postsHandler')
const authjwt = require(newFunction())

postsRoute.get('/', getAllPostsHandler)
postsRoute.get('/:id', getPostByIdHandler)
postsRoute.post('/register', authjwt.authjwt, createPostHandler)
postsRoute.put('/update/:id', updatPostHandler)
postsRoute.delete('/delete/:id', deletePostHandler)

module.exports = postsRoute

function newFunction() {
    return '../middleware/authjwt'
}
