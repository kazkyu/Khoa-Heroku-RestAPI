// Define some student data
var studentData = [{
  name: "Brandon",
  address: "Oulu",
  class: "DPI1SN",
  id: 1
},
{
  name: "Lee",
  address: "Rovaniemi",
  class: "DPI2SN",
  id: 2
}];

var grades_data_provider = require('../db/grade');


// Public functions for other modules to use
exports.getAllStudents = function()
{
  return studentData;
}

exports.getStudentById = function(id)
{
  return studentData.filter(function(student){

    if(student.id == id)
    {
      return student;
    }
  });
}

exports.updateStudent = function(id,new_student)
{
  var ret = null;
  studentData.forEach(function(student,index){
    if(student.id == id)
    {
      studentData[index] = new_student;
      studentData[index].id = id;
      ret = studentData[index];
    }
  }
);

return ret;
}

exports.addStudent = function(student)
{
  studentData.push(student);
}

exports.removeStudentById = function(id)
{
  var ret = false;
  studentData.forEach(function(student,index){
    if(student.id == id)
    {      
      unset(studentData[index]);
      ret = true;
    }
  }
);

return ret;

}
