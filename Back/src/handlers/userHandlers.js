const {
    getAllUsers,
    getUserById,
    getUserByName,
    createUser,
  } = require('../controllers/userController')

const getUsersHandler = async (req, res, next) => {
    const { name } = req.query
    if(req.query.name) return next()
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

const getUserByIdHandler = async (req, res) => {
    const { id } = req.params
    try {
        const user = await getUserById(id)
        if(user){
            res.status(200).json(user)
        }else{
            return res.status(500).json({message: `User not found`})
        }
    } catch (error) {
        res.status(400).json({message: `Error trying to find the userID`})
    }
}

const getUserByNameHandler = async (req, res) => {
    const { name } = req.body
    try {
        const user = await getUserByName(name.toLowerCase())
        if(user){
            res.status(200).json(user)
        }else{
            return res.status(500).json({message: `User ${name} not found`})
        }
    } catch (error) {
        res.status(400).json({message: `Erros trying to find the user ${name}`})
    }
}

const createUserHandler = async (req, res) => {    
    try {
        const { nameU, 
            lastNameU, 
            passwordU, 
            idNumbU, 
            emailU, 
            phoneU, 
            addressU, 
            reasonU 
        } = req.body

        if(!nameU || !lastNameU || !passwordU || !idNumbU || !emailU || !phoneU || !addressU || !reasonU){
            return res.status(400).send(`You must complete all fields 😅`)
        }else{
            await createUser(nameU, lastNameU, passwordU, idNumbU, emailU, phoneU, addressU, reasonU)
            res.status(200).send(`User ${nameU} created successfully`)
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
}