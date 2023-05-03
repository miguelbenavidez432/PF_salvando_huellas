const usersRoute = require("express").Router();
const {
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByNameHandler,
  createUserHandler,
  updateUserHandler,
  loginUserHandler,
  forgotPassHandler,
  banUserHandler,
  unbanUserHandler,
  resetPassHandler,
} = require("../handlers/usersHandler");
const { getCartByUser } = require("../controllers/paymentController");

const userAuth = require("../Middleware/userAuth");
const authjwt = require("../Middleware/authjwt");

usersRoute.get("/", getAllUsersHandler);
usersRoute.get("/:id", getUserByIdHandler);
usersRoute.get("/", authjwt.authjwt, getUserByNameHandler);
usersRoute.post("/register", userAuth.saveUser, createUserHandler);
usersRoute.put("/:id", updateUserHandler);
usersRoute.post("/login", loginUserHandler);
usersRoute.put("/ban/:id", banUserHandler);
usersRoute.put("/unban/:id", unbanUserHandler);

usersRoute.put('/forgotpass/:id', forgotPassHandler)
usersRoute.put('/resetpass/:id', resetPassHandler)
usersRoute.get("/:userId/cart", getCartByUser);

module.exports = usersRoute;
