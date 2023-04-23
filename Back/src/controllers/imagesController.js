const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "salvandohuellas",
  api_key: "443813747487981",
  api_secret: "3ozf25Fn6cJ31_VK9A2EW0uNSpM",
  secure: true,
});

const uploadImage = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: "salvandohuellas",
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploadImage };
