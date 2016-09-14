var express = require('express');
var router = express.Router();
var data_provider = require('../db/course');

//
// implement functionality
//

function getAllCourses(req,res,next)
{
    res.json(data_provider.getAllCourses());
}

function postNewCourse(req,res,next)
{
    // Post parameters are available through req.body
    // Notice that you really should do some validation before accepting the body
    data_provider.addCourse(req.body);
    res.sendStatus(201);
}

function updateCourse(req,res,next)
{
	res.json(data_provider.updateCourse(req.params.id,req.body));
}

function deleteCourse(req,res,next)
{
    data_provider.removeCourseById(req.params.id);
    res.send('Deleted');
}

function getCourseById(req,res,next)
{
    res.json(data_provider.getCourseById(req.params.id));
}

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a student');
// });

//
// Declare routes
//
/* GET students listing. */
router.route('/').get(getAllCourses).post(postNewCourse);

router.route('/:id')
.get(getCourseById)
.delete(deleteCourse);

module.exports = router;
