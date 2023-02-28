const express = require('express');
const router = express.Router();
const { postObra, getObras } = require('./obras.controllers');
const upload = require("../../utils/middlewares/uploadImages.middleware.js");

// POST /obras - crear una nueva obra
router.post('/obras', upload.array('images'), postObra);
router.get('/get-obras', getObras);

module.exports = router;