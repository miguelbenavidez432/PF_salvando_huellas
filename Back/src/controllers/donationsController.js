const { Op } = require("sequelize")
const { Donations } = require('../db')

async function getAllDonations() {
  const allDonations = await Donation.findAll()
  return allDonations
}

async function createDonation(amountD){

        const newDonation = await Donations.create({
          amountD: amountD
        })
        return newDonation
}

module.exports = {
  getAllDonations,
  createDonation
}
