const express = require('express');
const routerComponents = express.Router();
const {  getComponents, postComponent } = require('./component.controllers');

// POST /obras - crear una nueva obra
routerComponents.post('/components',  postComponent);
routerComponents.get('/get-components', getComponents);

module.exports = routerComponents;