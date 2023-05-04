const { Adoptions, Dogs, Users } = require('../db')
const {Op} = require("sequelize")


// Function: Create an adoption
async function createAdoption(adopted_homeA, id_Dog, id_User) {
  const rep = await Adoptions.findOne({
    where: {
      dogId: id_Dog,
      userId: id_User
    }
  })
  if(rep) throw Error("This User and this Dog already exist")
  const newAdoption = await Adoptions.create({
    adopted_homeA: adopted_homeA,
    dogId: id_Dog,
    userId: id_User
  })
  return newAdoption
}

// Get all Dogs by Name
async function getAllAdoptionByNameD(nameD) {
  const dogsAllName = await Dogs.findAll({
    where: {
      nameD: {
        [Op.iLike]: `%${nameD}%`
      }
    },
  })
  const dogsId = await Promise.all(dogsAllName.map(async (d) => d.id_Dog))
  const dogadop = await Promise.all(dogsId.map(async (id) => {
    const adopfind = await Adoptions.findOne({
      where: {
        dogId: id
      }
    })
    return adopfind
  }))
  return dogadop
}

// Get all Users by name
async function getAllAdoptionByNameU(nameU) {
  const usersAllName = await Users.findAll({
    where: {
      nameU: {
        [Op.iLike]: `%${nameU}%`
      }
    },
  })
  const usersId = await Promise.all(usersAllName.map(async (d) => d.id_User))
  const useradop = await Promise.all(usersId.map(async (id) => {
    const adopfindU = await Adoptions.findOne({
      where: {
        userId: id
      }
    })
    return adopfindU
  })) 
  return useradop
}

// Get all adoption by Dog or user name
async function getByName(name) {
  const resulDog=await getAllAdoptionByNameD(name) 
  const reultUser = await getAllAdoptionByNameU(name)  
  const resultName = [...resulDog, ...reultUser]
  const resultend = [...new Set(resultName)]
  return resultend
}

// Get all adoptions
async function getAllAdoption() {
  const allAdoption = await Adoptions.findAll()
  return allAdoption
}

// Update statusA for Admin
async function statusAdoption (id, status) {
  await Adoptions.update({
    statusA: status
  }, {
    where: {
      id_Adoption: {
        [Op.eq]: id,
      }
    }
  })
  const userAdoptionId = await Adoptions.findByPk(id)
  const user = await Users.findByPk(userAdoptionId.userId)
  return {user, status}
}

// Delete an adoption 
async function deleteAdoption (id) {
await Adoptions.update({
    activeA: false
  }, {
    where: {
      id_Adoption: {
        [Op.eq]: id,
      }
    }
  })
}

module.exports = {
  createAdoption,
  statusAdoption,
  getAllAdoption,
  getByName,
  deleteAdoption
}
