const {
  getAllDogs,
  getDogById,
  getDogByName,
  dogCreate,
} = require("../controllers/dogsController")

async function getAllDogsHandler(req, res) {
  try {
    const allDogs = await getAllDogs()
    res.status(200).json(allDogs)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

async function getDogByIdHandler(req, res) {
  const id = req.params.id

  try {
    const dogId = await getDogById(id)
    if (!dogId) {
      return res.status(404).json({ message: `Dog whit ID ${id} not found` })
    }
    res.status(200).json(dogId)
  } catch (error) {
    res.status(404).json({ message: "Error trying to find the ID" })
  }
}

async function getDogByNameHandler(req, res) {
  const name = req.query.name

  try {
    const dogName = await getDogByName(name)
    if (dogName.lenght === 0) {
      return res
        .status(404)
        .json({ message: `Dogs whit name ${name} not found` })
    }
    res.status(200).json(dogName)
  } catch (error) {
    res.status(404).json({ message: "Error trying to find the name" })
  }
}

async function postDogHandler(req, res) {
  try {
    const { nameD, sexD, sizeD, historyD, photoD } = req.body

    if (!nameD || !sexD || !sizeD || !historyD || !photoD) {
      return res.status(404).send("You must complete all fields!")
    } else {
      await dogCreate(nameD, sexD, sizeD, historyD, photoD)
      res.status(200).send(`Dog ${nameD} created sucessfully!`)
    }
  } catch (error) {
    res.status(404).json({ message: "error al post Dogs" })
  }
}

module.exports = {
  getAllDogsHandler,
  getDogByNameHandler,
  getDogByIdHandler,
  postDogHandler,
};
