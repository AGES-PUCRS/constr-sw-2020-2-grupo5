const express = require('express');
const routes = express.Router();

const ContestController = require('../controllers/ContentController');

routes.get('/content', ContestController.listAllContents);
routes.get('/content/:id', ContestController.getContentById);
routes.delete('/content/:id', ContestController.deleteContent);
routes.post('/content', ContestController.createContent);
routes.put('/content/:id', ContestController.putContent);
routes.patch('/content/:id', ContestController.patchContent);

module.exports = routes;