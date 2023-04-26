const {
  getAllReferences,
  createReference,
} = require('../controllers/referencesController')

const getAllReferencesHandler = async (req, res, next) => {
  const { name } = req.query
  if (req.query.name) return next()
  try {
    const allReferences = await getAllReferences();
    res.status(200).json(allReferences)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const createReferenceHandler = async (req, res) => {
  try {
    const {
      textR,
      idDog
    } = req.body

    if (!textR) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      await createReference(textR, idDog)
      res.status(200).send(`Reference ${textR} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getAllReferencesHandler,
  createReferenceHandler
}