const express = require("express");
const { uploadImageHandler } = require("../handlers/imagesHandler");
const imagesRoute = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

imagesRoute.post("/uploadImages", upload.single("image"), async (req, res) => {
  const imagePath = req.file.path;
  const result = await uploadImageHandler(imagePath);
  res.json(result);
});

module.exports = imagesRoute;
