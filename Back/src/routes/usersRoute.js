const usersRoute = require('express').Router()
const {
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
    updateUserHandler,
    login,
} = require('../handlers/usersHandler')
const userAuth = require('../Middleware/userAuth')


usersRoute.get('/', getAllUsersHandler)
usersRoute.get('/:id', getUserByIdHandler)
usersRoute.get('/', getUserByNameHandler)
usersRoute.post('/register', userAuth.saveUser, createUserHandler)
usersRoute.put('/:id', updateUserHandler)
usersRoute.post('/login', login )

module.exports = usersRoute