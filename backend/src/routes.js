const express= require('express');

const BeaconController = require('./controllers/BeaconController')
const CategoryController = require('./controllers/CategoryController')
const SubCategoryController = require('./controllers/SubCategoryController')
const ToolingController = require('./controllers/ToolingController')
const routes = express.Router();


routes.get('/beacons', BeaconController.index);
routes.post('/beacons', BeaconController.create);
routes.delete('/beacons/clear', BeaconController.clear);
routes.delete('/beacons/delete/:id', BeaconController.delete);
routes.put('/beacons/:id', BeaconController.update);

routes.post('/category', CategoryController.create);
routes.get('/category', CategoryController.index);
routes.put('/category/:id', CategoryController.update);
routes.delete('/category/delete/:id', CategoryController.delete);
routes.delete('/category/clear', CategoryController.clear);

routes.post('/subcategory', SubCategoryController.create);
routes.get('/subcategory', SubCategoryController.index);
routes.put('/subcategory/:id', SubCategoryController.update);
routes.delete('/subcategory/delete/:id', SubCategoryController.delete);
routes.delete('/subcategory/clear', SubCategoryController.clear);

routes.post('/tooling', ToolingController.create);
routes.get('/tooling', ToolingController.index);
routes.put('/tooling/:id', ToolingController.update);
routes.delete('/tooling/delete/:id', ToolingController.delete);
routes.delete('/tooling/clear', ToolingController.clear);


module.exports = routes;