const usersRoute = require('express').Router()
const {
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
} = require('../handlers/usersHandler')


usersRoute.get('/', getAllUsersHandler)
usersRoute.get('/:id', getUserByIdHandler)
usersRoute.get('/', getUserByNameHandler)
usersRoute.post('/register', createUserHandler)

module.exports = usersRoute