// Define some student data
var courseGradeData = [{
  student_id: 1,
  course_id: 1,
  grade: 10
},
{
  student_id: 2,
  course_id: 1,
  grade: 8
}];

var student_data_provider = require('../db/student');
var course_data_provider = require('../db/course');

exports.addGrade = function(grade)
{
  courseGradeData.push(grade);
}

exports.removeGrade = function(student_id,course_id)
{
  var ret = false;
  courseGradeData.forEach(function(grade,index){
    if(grade.student_id == student_id && grade.course_id == course_id)
    {
      unset(courseGradeData[index]);
      ret = true;
    }
  }
);

return ret;

}

exports.updateGrade = function(new_grade)
{
  var ret = null;
  courseGradeData.forEach(function(grade,index){
    if(grade.student_id == new_grade.student_id && grade.course_id == new_grade.course_id)
    {
      courseGradeData[index] = new_grade;
      ret = studentData[index];
    }
  }

  return $ret;
);

exports.getGrade = function(student_id,course_id)
{
  return courseGradeData.filter(function(course_grade){
    if(course_grade.student_id == student_id &&
      course_grade.course_id == course_id)
      {
        return course_grade;
      }
    }
  );

  exports.getAllGrades = function()
  {
    return courseGradeData;
}
