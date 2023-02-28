const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Formulario",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
  },
  public_id:(req, res) => console.log(req)
});

const upload = multer({
  storage,
});

module.exports = upload;