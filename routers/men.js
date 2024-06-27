const express = require('express')
const projectsRoute = express.Router();
const { projectsController } = require('../Controller/index');

projectsRoute.post('/mens', projectsController.addProjectDetails);
projectsRoute.get('/mens', projectsController.getAllProjectDetails);
projectsRoute.patch('/mens/:id', projectsController.updateProjectDetails);
projectsRoute.delete('/mens/:id', projectsController.deleteProjectDetails);
projectsRoute.get('/mens/:id', projectsController.getbyid);

module.exports = projectsRoute;
