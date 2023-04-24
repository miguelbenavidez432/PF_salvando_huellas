const {
  getAllDonations,
  createDonation,
} = require('../controllers/donationsController')

const getAllDonationsHandler = async (req, res, next) => {
  const { name } = req.query
  if (req.query.name) return next()
  try {
    const allDonations = await getAllDonations()
    res.status(200).json(allDonations)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const createDonationHandler = async (req, res) => {
  try {
    const {
      amountD, userId
    } = req.body

    if (!amountD) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createDonation(amountD, userId)
      res.status(200).send(`Donation ${amountD} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getAllDonationsHandler,
  createDonationHandler,
}