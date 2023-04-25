const adoptionRoute = require('express').Router()

const {
  createAdoptionHandler,
  // ruta para rechazar o aceptar adop para el administrador
  getAllAdoptionHandler,
  updateAdoptionHandler,
  deleteAdoptionHandler,
  
} = require('../handlers/adoptionHandler')

// Routes
adoptionRoute.post('/register', createAdoptionHandler)
adoptionRoute.get('/', getAllAdoptionHandler)
adoptionRoute.put('/update/:id', updateAdoptionHandler)
adoptionRoute.delete('/delete/:id', deleteAdoptionHandler)


module.exports = adoptionRoute