var express = require('express');
var router = express.Router();
var data_provider = require('../db/student');

//
// implement functionality
//

function getAllStudents(req,res,next)
{
    res.json(data_provider.getAllStudents());
}

function postNewStudent(req,res,next)
{
    // Post parameters are available through req.body
    // Notice that you really should do some validation before accepting the body
    data_provider.addStudent(req.body);
    res.sendStatus(201);
}

function updateStudent(req,res,next)
{	
    res.json(data_provider.updateStudent(req.params.id,req.body));
}

function deleteStudent(req,res,next)
{
    data_provider.removeStudentById(req.params.id);
    res.send('Deleted');
}

function getStudentById(req,res,next)
{
    res.json(data_provider.getStudentById(req.params.id));
}

router.route('/').get(getAllStudents).post(postNewStudent);

router.route('/:id')
.get(getStudentById)
.delete(deleteStudent)
.put(updateStudent);

module.exports = router;
