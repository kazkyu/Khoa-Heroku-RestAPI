// Define some course data
var courseData = [{
  id: 1,
  name: "Math",
  description: "Math for stupid"
},
{
  id: 2,
  name: "English",
  description: "English for stupid"
}];



// Public functions for other modules to use
exports.getAllCourses = function()
{
  return courseData;
}

exports.updateCourse = function(id,new_course){
  var ret = null;
  courseData.forEach(function(course,index){
    if(course.id == id)
    {
      courseData[index] = new_course;
      courseData[index].id = id;
      ret = courseData[index];
    }
  }
);

return ret;
}

exports.getCourseById = function(id)
{
  return courseData.filter(function(course){

    if(course.id == id)
    {
      return course;
    }
  });
}

exports.addCourse = function(course)
{
  studentData.push(course);
}

exports.removeCourseById = function(id)
{
  var ret = false;
  courseData.forEach(function(course,index){
    if(course.id == id)
    {
      unset(courseData[index]);
      ret = true;
    }
  });

  return ret;
}
