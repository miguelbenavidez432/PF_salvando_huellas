const {
  getAllDogs,
  getDogsById,
  getDogsByName,
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
      return res
        .status(404)
        .json({ message: `No se encontraron perros con el ID ${id}` });
    }
    res.status(200).json(dogId);
  } catch (error) {
    res.status(404).json({ message: "Error al buscar por ID" });
  }
}

async function getDogsByNameHandler(req, res) {
  const name = req.query.name;

  try {
    const dogName = await getDogsByName(name);
    if (dogName.lenght === 0) {
      return res
        .status(404)
        .json({ message: `No se encontraron perros con ese nombre ${name}` });
    }
    res.status(200).json(dogName);
  } catch (error) {
    res.status(404).json({ message: "Error al buscar por name" });
  }
}

module.exports = {
  getAllDogsHandler,
  getDogsByNameHandler,
  getDogsByIdHandler,
};
