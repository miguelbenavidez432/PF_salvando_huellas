const express = require("express")
const jwt = require("jsonwebtoken")
const { Users } = require ('../db')
require('dotenv').config()

const authjwt = async (req, res, next) => {
    let token = req.header("authorization");

  if (!token) return res.status(403).json({ message: "No token provided" })

  try {
    const decoded = jwt.verify(token, process.env.secretKey);
    req.id = decoded.id;
    const user = await Users.findByPk(req.id, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" })

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" })
  }
} 

module.exports = {
    authjwt,
};