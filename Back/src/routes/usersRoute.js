const usersRoute = require('express').Router()
const {
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
    updateUserHandler,
    loginUserHandler,
    forgotPassHandler,

} = require('../handlers/usersHandler')
const userAuth = require('../Middleware/userAuth')
const authjwt = require('../Middleware/authjwt')


usersRoute.get('/', getAllUsersHandler)
usersRoute.get('/:id', getUserByIdHandler)
usersRoute.get('/', authjwt.authjwt, getUserByNameHandler)
usersRoute.post('/register', userAuth.saveUser, createUserHandler)
usersRoute.put('/:id', updateUserHandler)
usersRoute.post('/login', loginUserHandler),
usersRoute.put('/forgotpass/:id', forgotPassHandler)

module.exports = usersRoute