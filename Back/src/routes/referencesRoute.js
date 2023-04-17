const referencesRoute = require('express').Router()

const {
    getAllReferencesHandlers,
    createReferenceHandler
} = require('../handlers/referencesHandler')

referencesRoute.get('/', getAllReferencesHandlers)
referencesRoute.post('/register', createReferenceHandler)

module.exports = referencesRoute