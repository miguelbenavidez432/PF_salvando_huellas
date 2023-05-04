const {
  createAdoption,
  getAllAdoption,
  getByName,
  statusAdoption,
  deleteAdoption
} = require('../controllers/adoptionsController')

const { getUserById } = require('../controllers/usersController')

const { sendEmailAdoption, sendEmailUpdateStatus } = require('../controllers/sendEmailController')

// Create an Adoption
const createAdoptionHandler = async (req, res) => {
  const { adopted_homeA, id_Dog, id_User } = req.body
  try {
    if (!adopted_homeA || !id_Dog || !id_User) {
      return res.status(400).send(`You must complete all fields 😅`)
    } else {
      const newadop= await createAdoption( adopted_homeA,id_Dog, id_User)  
      const user = await getUserById(id_User)
      await sendEmailAdoption(user.emailU, adopted_homeA) 
      res.status(200).send(`Adoption ${newadop.id_Adoption} created successfully`)
    }   
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get Adoptions
const getAllAdoptionHandler = async (req, res) => {
  const { name } = req.query
  if (name) {
    try {
      const adoption = await getByName(name.toLowerCase())
      if (adoption) {
        res.status(200).json(adoption) 
      } else {
        return res.status(400).json({message: `Adoption not found`})
      }
    } catch (error) {
      res.status(400).json(error.message)
    }
  } else {
    res.status(200).json(await getAllAdoption())
  }
}

// Update statusA for Admin
const statusAdoptionHandler = async (req, res) => {
  const {id} = req.params
  const {status} = req.body
  try {
    if(!id){
      return res.status(400).json({message: `Adoption not found`})
    } else {
      const adoption = statusAdoption(id, status)
      await sendEmailUpdateStatus(adoption.user, adoption.status  )
      res.status(200).json(adoption) 
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

// Delete an adoption 
const deleteAdoptionHandler = async (req, res) => {
const {id}=req.params
try {
  if(!id){
    return res.status(400).json({message: `Adoption not found`})
  } else {
    const adoption = deleteAdoption(id)
    res.status(200).send(`Adoption delete`)
  }
} catch (error) {
  res.status(400).json(error.message)
}
}

module.exports = {
  createAdoptionHandler,
  getAllAdoptionHandler,
  statusAdoptionHandler,
  deleteAdoptionHandler
}