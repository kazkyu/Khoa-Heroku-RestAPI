var express = require('express');
var router = express.Router();
var data_provider = require('../db/grade');

//
// implement functionality
//

function getCourseGrade(req,res,next)
{
    res.json(data_provider.getGrade(req.params.student_id,req.params.course_id));
}

function updateCourseGrade(req,res,next)
{
    res.json(data_provider.updateGrade(req.body));
}

function createNewCourseGrade(req,res,next)
{
    res.json(data_provider.addGrade(req.body));
}

function deleteCourseGrade(req,res,next)
{
    res.json(data_provider.removeGrade(req.params.student_id,req.params.course_id));
}

function getAllGrades(req,res,next)
{
    res.json(data_provider.getAllGrades());
}

router.route('/')
.get(getAllGrades);

router.route('/:student_id/:course_id')
.get(getCourseGrade)
.put(updateCourseGrade)
.delete(deleteCourseGrade)
.post(createNewCourseGrade);

module.exports = router;
