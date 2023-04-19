const {
  createOpinion,
  getAllOpinions,
} = require("../controllers/opinionsController")

const getAllOpinionsHandler = async (req, res) => {
  try {
    const allOpinions = await getAllOpinions()
    res.status(200).json(allOpinions)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createOpinionHandler = async (req, res) => {
  try {
    const { commentO, qualificationO } = req.body
    const { id } = req.params

    if ( !commentO || !qualificationO) {
      return res.status(404).send("You must complete all fields")
    } else {
      await createOpinion( commentO, qualificationO, id)
      res.status(200).send("Thanks for your opinion!")
    }
  } catch (error) {
    res.status(404).json({ message: "error in opinions" })
  }
}

module.exports = { createOpinionHandler, getAllOpinionsHandler }
