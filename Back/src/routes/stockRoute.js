const stockRoute = require('express').Router()

const {
    getAllStockHandler,
    createStockHandler,
} = require('../handlers/stockHandler')

stockRoute.get('/', getAllStockHandler)
stockRoute.post('/register', createStockHandler)

module.exports = stockRoute