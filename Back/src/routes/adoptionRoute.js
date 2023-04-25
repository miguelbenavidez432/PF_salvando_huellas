const adoptionRoute = require('express').Router()

const {
  createAdoptionHandler,
  // ruta para rechazar o aceptar adop para el administrador
  getAllAdoptionHandler,
  updateAdoptionHandler,
  deleteAdoptionHandler,
  
} = require('../handlers/adoptionHandler')

// Routes
articlesRoute.post('/register', createAdoptionHandler)
articlesRoute.get('/', getAllAdoptionHandler)
articlesRoute.put('/update/:id', updateAdoptionHandler)
articlesRoute.delete('/delete/:id', deleteAdoptionHandler)


module.exports = adoptionRoute