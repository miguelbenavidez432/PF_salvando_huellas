const { uploadImage } = require("../controllers/imagesController");

const uploadImageHandler = async (imagePath) => {
  try {
    const urlImage = await uploadImage(imagePath);
    return { success: true, urlImage };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to upload image" };
  }
};

module.exports = { uploadImageHandler };
