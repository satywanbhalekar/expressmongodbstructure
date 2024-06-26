
const projectsService = require('../Services/project.Services');

function addProjectDetails(req, res) {
    console.log('Inside addProjectDetails controller');

    var body = req.body;
    console.log(body);

    projectsService.addProjectDetails(body).then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in addProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

/**
 * @author: Kevin Dmello
 * @description: GET get all project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function getAllProjectDetails(req, res) {
    console.log('Inside getAllProjectDetails controller');

    projectsService.getAllProjectDetails().then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in getAllProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

/**
 * @author: Kevin Dmello
 * @description: PUT update project details.
 * @param: {string} req.param will contain project id.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function updateProjectDetails(req, res) {
    console.log('Inside updateProjectDetails controller');

    var id = req.params.id;
    var body = req.body;

    projectsService.updateProjectDetails(id, body).then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in updateProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

/**
 * @author: Kevin Dmello
 * @description: DELETE project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function deleteProjectDetails(req, res) {
    console.log('Inside deleteProjectDetails controller');

    var id = req.params.id;

    projectsService.deleteProjectDetails(id).then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in deleteProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}


module.exports = {
    addProjectDetails,
    getAllProjectDetails,
    updateProjectDetails,
    deleteProjectDetails,
}