const referencesRoute = require('express').Router()

const {
    getAllReferencesHandler,
    createReferenceHandler
} = require('../handlers/referencesHandler')

referencesRoute.get('/', getAllReferencesHandler)
referencesRoute.post('/register', createReferenceHandler)

module.exports = referencesRoute