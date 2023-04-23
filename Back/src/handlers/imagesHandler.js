const { uploadImage } = require("../controllers/imagesController");

const uploadImageHandler = async (imagePath) => {
  try {
    const publicId = await uploadImage(imagePath);
    return { success: true, publicId };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to upload image" };
  }
};

module.exports = { uploadImageHandler };
