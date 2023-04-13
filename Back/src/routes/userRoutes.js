const userRoutes = require('express').Router();


userRoutes.get('/', getUsersHandler)