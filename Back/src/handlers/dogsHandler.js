const {
  getDogs,
  getDogById,
  dogCreate,
  dogDelete,
  dogDisable,
  dogEnable,
  dogUpdate,
} = require("../controllers/dogsController");

async function getDogsHandler(req, res) {
  try {
    const allDogs = await getDogs(req.query);
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(404).json({ message: "error al get Dogs" });
  }
}

async function getDogByIdHandler(req, res) {
  const id = req.params.id;
  try {
    const dogId = await getDogById(id);
    if (!dogId) {
      return res.status(404).json({ message: `Dog whit ID ${id} not found` });
    }
    res.status(200).json(dogId);
  } catch (error) {
    res.status(404).json({ message: "Error trying to find the ID" });
  }
}

async function postDogHandler(req, res) {
  try {
    const { nameD, sexD, sizeD, historyD, photoD, ageD, userId, references} = req.body;

    if (!nameD || !sexD || !sizeD || !historyD || !ageD) {
      return res.status(404).send("You must complete all fields!");
    } else {
      await dogCreate(nameD, sexD, sizeD, historyD, photoD, ageD, userId, references);
      res.status(200).send(`Dog ${nameD} created sucessfully!`);
    }
  } catch (error) {
    res.status(404).json({ message: "error al post Dogs" });
  }
}

async function updateDogHandler(req, res) {
  try {
    const { nameD, sexD, sizeD, historyD, photoD, ageD, references } = req.body;
    const id = req.params.id;

    const updatedDog = await dogUpdate(
      nameD,
      sexD,
      sizeD,
      historyD,
      photoD,
      ageD,
      id,
      references
    );

    if (updatedDog[0] === 0) {
      res.status(404).json({ message: `Dog with ID ${id} not found` });
    } else {
      res.status(200).send(`Dog ${nameD} updated sucessfully!`);
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating dog" });
  }
}

async function deleteDogHandler(req, res) {
  const { id } = req.params;
  try {
    const getDog = await getDogById(id);
    if (getDog) {
      await dogDelete(id);
      res.status(200).send(`Dog ${getDog.id_Dog} delete`);
    } else {
      return res.status(500).json({ message: `Dog ${nameD} not found` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function disableDogHandler(req, res) {
  const id = req.params.id;

  try {
    await dogDisable(id);
    res
      .status(200)
      .json({ message: "El perro ha sido desactivado correctamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Ha ocurrido un error al deshabilitar el perro" });
  }
}

async function enableDogHandler(req, res) {
  const id = req.params.id;

  try {
    await dogEnable(id);
    res
      .status(200)
      .json({ message: "El perro ha sido activado correctamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Ha ocurrido un error al activar el perro" });
  }
}

module.exports = {
  getDogByIdHandler,
  postDogHandler,
  getDogsHandler,
  deleteDogHandler,
  disableDogHandler,
  enableDogHandler,
  updateDogHandler,
};
