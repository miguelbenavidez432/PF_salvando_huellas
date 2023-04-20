const usersRoute = require('express').Router()
const {
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
    updateUserHandler,
} = require('../handlers/usersHandler')


usersRoute.get('/', getAllUsersHandler)
usersRoute.get('/:id', getUserByIdHandler)
usersRoute.get('/', getUserByNameHandler)
usersRoute.post('/register', createUserHandler)
usersRoute.put('/:id', updateUserHandler)

module.exports = usersRoute