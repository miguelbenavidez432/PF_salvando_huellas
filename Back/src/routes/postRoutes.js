const postRoutes = require('express').Router();
const {
    getAllPostHandler,
    getPostByIdHandler,
    createPostHandler,
} = require('../handlers/postsHandler');

postRoutes.get('/', getAllPostHandler);
postRoutes.get('/:id', getPostByIdHandler)
postRoutes.post('/create', createPostHandler)

module.exports = postRoutes;