const {
    getAllUsers,
    getUserById,
    getUserByName,
    getUserByLastName,
    createUser,
    updateUser,
    getUserByEmail,
    forgotPass,
    resetPass,
    banUser,
    unbanUser,
  } = require('../controllers/usersController')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()
const { 
  sendEmail,
  sendEmailUpdate,
 } = require('../controllers/sendEmailController')

const getAllUsersHandler = async (req, res) => {
    const { nameU, lastNameU, emailU  } = req.query

    try {
        if(nameU){
            const userName = await getUserByName(nameU.toLowerCase())
            if(userName){
                res.status(200).json(userName)
            }else{
                return res.status(500).json({message: `User ${nameU} not found`})
            }
    }
    else if(lastNameU){
        const userLastName = await getUserByLastName(lastNameU.toLowerCase())
        if(userLastName){
            res.status(200).json(userLastName)
        }else{
            return res.status(500).json({message: `User ${lastNameU} not found`})
        }
    }
    else if(emailU){
      const userEmail = await getUserByEmail(emailU)
      if(userEmail){
        res.status(200).json(userEmail)
      }else{
        return res.status(500).json({message: `User email ${emailU} not found`})
      }
    }else{
              const allUsers = await getAllUsers()
              res.status(200).json(allUsers)
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      return res.status(400).json({ message: `User not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error trying to find the userID` });
  }
};

const getUserByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const user = await getUserByName(name.toLowerCase());
    if (user) {
      res.status(200).json(user);
    } else {
      return res.status(500).json({ message: `User ${name} not found` });
    }
  } catch (error) {
    res.status(400).json({ message: `Erros trying to find the user ${name}` });
  }
};

const createUserHandler = async (req, res) => {    
    const { nameU, 
        lastNameU, 
        passwordU, 
        idNumbU, 
        emailU, 
        phoneU, 
        addressU, 
        reasonU,
        isAdminU 
    } = req.body

    hashPassword = await bcrypt.hash(passwordU, 10)
    
    try {

    if (
      !nameU ||
      !lastNameU ||
      !hashPassword ||
      !idNumbU ||
      !emailU ||
      !phoneU ||
      !addressU ||
      !reasonU
    ) {
      return res.status(400).send(`You must complete all fields 😅`);
    } else {
      const newUser = await createUser(
        nameU,
        lastNameU,
        hashPassword,
        idNumbU,
        emailU,
        phoneU,
        addressU,
        reasonU,
        isAdminU
      );
      if (newUser) {
        let token = jwt.sign({ id: newUser.id_User }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(newUser, null, 2));
        console.log(token);
        //send users details
        sendEmail(emailU);
        return res.status(201).send(newUser);
      } else {
        return res.status(409).send("Details are not correct");
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  const { nameU, lastNameU, passwordU, phoneU, addressU, reasonU, isAdminU } =
    req.body;
  const { id } = req.params;

  try {
    const getUser = await getUserById(id);
    if (getUser) {
      await updateUser(
        id,
        nameU,
        lastNameU,
        passwordU,
        phoneU,
        addressU,
        reasonU,
        isAdminU
      );
      res
        .status(200)
        .send(`User ${getUser.nameU} ${getUser.lastNameU} updated`);
    } else {
      return res.status(500).json({
        message: `User ${getUser.nameU} ${getUser.lastNameU} not found`,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUserHandler = async (req, res) => {
  try {
    const { emailU, passwordU } = req.body;

    //find a user by their email
    const user = await getUserByEmail(emailU);

    //if user email is found, compare password with bcrypt
    if (user) {
      const isSame = await bcrypt.compare(passwordU, user.passwordU);

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (isSame) {
        let token = jwt.sign({ id: user.id_User }, process.env.secretKey, {
          expiresIn: 864000000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        //res.header('authorization', token).json({token: token})
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        //send user data
        return res.status(201).send({ token, user });
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};


const forgotPassHandler = async (req, res) =>{
  try {
      const { id } = req.params
      const { emailU } = req.body
      const user = await getUserById(id)
      if(user){
        let token = jwt.sign({ id: user.id_User }, process.env.passKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
        await sendEmailUpdate(token, emailU,)
        await forgotPass(token, emailU)
        res.status(200).send(`A email was send to ${emailU}. Check your inbox`)
      }else{
        res.status(400).send(`User whit email ${emailU} don't exists`)
      }
    } catch (error) {
      res.status(400).send(`User whit email ${emailU} don't exists`)
    }
}


async function banUserHandler(req, res) {
  const id = req.params.id;

  try {
    await banUser(id);
    res.status(200).json({ message: "User successfully banned" });
  } catch (error) {
    if (error.message === "User already banned") {
      res.status(400).json({ message: "User already banned" });
    } else {
      res
        .status(400)
        .json({ message: "An error occurred while banning the user" });
    }
  }
}

async function unbanUserHandler(req, res) {
  const id = req.params.id;

  try {
    await unbanUser(id);
    res.status(200).json({ message: "User successfully unbanned" });
  } catch (error) {
    if (error.message === "User already unbanned") {
      res.status(400).json({ message: "User already unbanned" });
    } else {
      res
        .status(400)
        .json({
          message:
            "An error occurred while unbanning the user: " + error.message,
        });
    }
  }
}


module.exports = {
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByNameHandler,
  createUserHandler,
  updateUserHandler,
  loginUserHandler,
  banUserHandler,
  unbanUserHandler,
  forgotPassHandler,
}
