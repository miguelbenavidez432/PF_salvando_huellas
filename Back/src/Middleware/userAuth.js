//importing modules
const express = require("express");
const { Users } = require("../db");
//Assigning db.users to User variable
 
//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const saveUser = async (req, res, next) => {
 //search the database to see if user exist
 try {
//    const username = await User.findOne({
//      where: {
//        userName: req.body.userName,
//      },
//    });
//    //if username exist in the database respond with a status of 409
//    if (username) {
//      return res.json(409).send("username already taken");
//    }

   //checking if email already exist
   const emailcheck = await Users.findOne({
     where: {
        emailU: req.body.emailU,
     },
   });

   //if email exist in the database respond with a status of 409
   if (emailcheck) {
     return res.json(409).send("Authentication failed");
   }

   next();
 } catch (error) {
   console.log(error);
 }
};

//exporting module
 module.exports = {
 saveUser,
};