const {
  getAllDogs,
  getDogsById,
  getDogsByName,
  dogCreate,
} = require("../controllers/dogController");

async function getAllDogsHandler(req, res) {
  try {
    const allDogs = await getAllDogs();
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getDogsByIdHandler(req, res) {
  const id = req.params.id;

  try {
    const dogId = await getDogsById(id);
    if (!dogId) {
      return res.status(404).json({ message: `Dog whit ID ${id} not found` });
    }
    res.status(200).json(dogId);
  } catch (error) {
    res.status(404).json({ message: "Error trying to find the ID" });
  }
}

async function getDogsByNameHandler(req, res) {
  const name = req.query.name;

  try {
    const dogName = await getDogsByName(name);
    if (dogName.lenght === 0) {
      return res
        .status(404)
        .json({ message: `Dogs whit name ${name} not found` });
    }
    res.status(200).json(dogName);
  } catch (error) {
    res.status(404).json({ message: "Error trying to find the name" });
  }
}

async function postDogsHandler(req, res) {
  try {
    const { idDog, nameD, sexD, sizeD, historyD, photoD } = req.body;

    if (!idDog || !nameD || !sexD || !sizeD || !historyD || !photoD) {
      return res.status(404).send("You must complete all fields!");
    } else {
      await dogCreate(idDog, nameD, sexD, sizeD, historyD, photoD);
      res.status(200).send(`Dog ${nameD} created sucessfully!`);
    }
  } catch (error) {
    res.status(404).json({ message: "error al post Dogs" });
  }
}

module.exports = {
  getAllDogsHandler,
  getDogsByNameHandler,
  getDogsByIdHandler,
  postDogsHandler,
};
