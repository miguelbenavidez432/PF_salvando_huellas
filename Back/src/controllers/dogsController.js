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

function createQueryByFilter(age, size, sex) {
  const whereCondition = {
    //Devolver lo que de todas las condiciones den true
    [Op.and]: [
      size
        ? {
            sizeD: {
              [Op.iLike]: `%${size}%`,
            },
          }
        : {},

      sex
        ? {
            sexD: {
              [Op.iLike]: `%${sex}%`,
            },
          }
        : {},

      age
        ? {
            ageD: {
              [Op.iLike]: `%${age}%`,
            },
          }
        : {},
    ],
  };
  return whereCondition;
}

async function getDogsByParams(query) {
  return await Dogs.findAll({ where: query });
}

async function getAllDogs() {
  const allDogs = await Dogs.findAll();

  return allDogs;
}

async function getDogById(id) {
  const dogId = await Dogs.findByPk(id);
  return dogId;
}

async function dogCreate(nameD, sexD, sizeD, historyD, photoD, ageD) {
  const newDog = await Dogs.create({
    nameD: nameD.toLowerCase(),
    sexD: sexD,
    ageD: ageD,
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
  dogCreate,
};
