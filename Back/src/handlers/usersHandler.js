const {
    getAllUsers,
    getUserById,
    getUserByName,
    getUserByLastName,
    createUser,
  } = require('../controllers/usersController')

const getAllUsersHandler = async (req, res) => {
    const { nameU, lastNameU  } = req.query

    try {
        if(nameU){
            const userName = await getUserByName(nameU.toLowerCase())
            if(userName){
                res.status(200).json(nameU)
            }else{
                return res.status(500).json({message: `User ${nameU} not found`})
            }
    }
    else if(lastNameU){
        const userLastName = await getUserByLastName(lastNameU.toLowerCase())
        if(userLastName){
            res.status(200).json(lastNameU)
        }else{
            return res.status(500).json({message: `User ${lastNameU} not found`})
        }
    }
    else{
        const allUsers = await getAllUsers()
        res.status(200).json(allUsers)
    }
    
    } catch (error) {
        res.status(400).json({ message: error.message})    
    }}

const getUserByIdHandler = async (req, res) => {
    const { id } = req.params
    try {
        const user = await getUserById(id)
        if(user){
            res.status(200).json(user)
        }else{
            return res.status(400).json({message: `User not found`})
        }
    } catch (error) {
        res.status(500).json({message: `Error trying to find the userID`})
    }
}

const getUserByNameHandler = async (req, res) => {
    const { name } = req.query
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
    const { nameU, 
        lastNameU, 
        passwordU, 
        idNumbU, 
        emailU, 
        phoneU, 
        addressU, 
        reasonU 
    } = req.body
    
    try {
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
    getAllUsersHandler,
    getUserByIdHandler,
    getUserByNameHandler,
    createUserHandler,
}