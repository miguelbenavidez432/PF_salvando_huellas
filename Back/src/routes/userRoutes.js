const userRoutes = require('express').Router();
const {
    getUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
} = require('../handlers/userHandlers')


userRoutes.get('/', getUsersHandler);
userRoutes.get('/:id', getUserByIdHandler);
userRoutes.get('/', getUserByNameHandler);
userRoutes.post('/register', createUserHandler);

module.exports = userRoutes;