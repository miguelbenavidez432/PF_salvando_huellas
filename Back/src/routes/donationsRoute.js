const donationsRoute = require('express').Router()

const {
    getAllDonationsHandler,
    createDonationHandler,
} = require('../handlers/donationsHandler')

donationsRoute.get('/', getAllDonationsHandler)
donationsRoute.post('/register', createDonationHandler)

module.exports = donationsRoute