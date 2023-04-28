const adoptionsRoute = require('express').Router()

const {
  createAdoptionHandler,
  getAllAdoptionHandler,
  statusAdoptionHandler,
  deleteAdoptionHandler,
  
} = require('../handlers/adoptionsHandler')

// Routes
adoptionsRoute.post('/register', createAdoptionHandler)
adoptionsRoute.get('/', getAllAdoptionHandler)
adoptionsRoute.put('/update/:id', statusAdoptionHandler)
adoptionsRoute.delete('/delete/:id', deleteAdoptionHandler)

module.exports = adoptionsRoute