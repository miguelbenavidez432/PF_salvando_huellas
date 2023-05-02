const cartsRoute = require('express').Router()

const {
  createCartHandler,
  getAllCartsByUserIdHandler,  
} = require('../handlers/cartsHandler')

// Routes
cartsRoute.post('/register', createCartHandler)
cartsRoute.get('/:id', getAllCartsByUserIdHandler)

module.exports = cartsRoute