const { Op } = require("sequelize");
const { Dogs } = require("../db");

async function getDogs({ name, size, sex }) {
  try {
    if (name || size || sex) {
      let queryByFilter = createQueryByFilter(name, size, sex);
      return await getDogsByParams(queryByFilter);
    } else {
      const allDogs = await getAllDogs();
      return allDogs;
    }
  } catch (error) {
    console.error("message", error.message);
  }
}

function createQueryByFilter(name, size, sex) {
  let query = {};

  if (name) {
    query.where = {
      nameD: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  if (size) {
    query.where = {
      sizeD: {
        [Op.iLike]: `%${size}%`,
      },
    };
  }

  if (sex) {
    query.where = {
      sexD: {
        [Op.iLike]: `%${sex}%`,
      },
    };
  }

  return query;
}

async function getDogsByParams(query) {
  return await Dogs.findAll(query);
}

async function getAllDogs() {
  const allDogs = await Dogs.findAll();

  return allDogs;
}

async function getDogById(id) {
  const dogId = await Dogs.findByPk(id);
  return dogId;
}

async function getDogByName(name) {
  const dogsByName = await Dogs.findAll({
    where: {
      nameD: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return dogsByName;
}

async function dogCreate(nameD, sexD, sizeD, historyD, photoD) {
  const newDog = await Dogs.create({
    nameD: nameD.toLowerCase(),
    sexD: sexD,
    sizeD: sizeD,
    historyD: historyD,
    photoD: photoD,
  });
  return newDog;
}

module.exports = {
  getAllDogs,
  getDogs,
  getDogById,
  getDogByName,
  dogCreate,
};
