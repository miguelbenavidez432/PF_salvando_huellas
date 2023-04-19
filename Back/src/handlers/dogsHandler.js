const {
  getDogs,
  getDogById,
  dogCreate,
  dogDelete,
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
    const { nameD, sexD, sizeD, historyD, photoD } = req.body;

    if (!nameD || !sexD || !sizeD || !historyD || !photoD) {
      return res.status(404).send("You must complete all fields!");
    } else {
      await dogCreate(nameD, sexD, sizeD, historyD, photoD);
      res.status(200).send(`Dog ${nameD} created sucessfully!`);
    }
  } catch (error) {
    res.status(404).json({ message: "error al post Dogs" });
  }
}

async function deleteDogHandler(req,res){
  const { id } = req.params.id
  try {
    const getDog = await getDogById(id)
    if(getDog){
      await dogDelete(id)
      res.status(200).send(`Dog ${getDog.id_Dog} delete`)
    }else{
      return res.status(500).json({ message: `Dog ${nameD} not found` })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getDogByIdHandler,
  postDogHandler,
  getDogsHandler,
  deleteDogHandler,
};
