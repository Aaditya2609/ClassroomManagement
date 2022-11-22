//login page
import { students_1 } from "./data.js";
import { teacher_1 } from "./data.js";
var loginMail=document.querySelector("#login-email");
var loginPassword=document.querySelector('#login-password');
var loginButton=document.querySelector("#login-button");
var student_id=0;
var teacher_id=0;


function login()
{
  var flag=true;
  console.log(loginMail.value+"   "+loginPassword.value)
  for(var student of students_1)
  {  
    if(loginMail.value==student.mail&&loginPassword.value==student.password)
    {
      console.log("Login Success")
      window.location.replace("/dashboardStudent.html")
      sessionStorage.setItem("student_id",student.rollno);
      flag=false;
      
    }
  }

  for(var teacher of teacher_1)
{
  if(loginMail.value==teacher.mail&&loginPassword.value==teacher.password)
  {
    console.log("Login Success")
    window.location.replace("/dashboardTeacher.html")
    sessionStorage.setItem("teacher_id",teacher.teacherid)
    flag=false;
  }
}

if(flag)
  {
    alert("Wrong Credentials")
  }
  console.log(student_id,teacher_id);
  
}
loginButton.addEventListener("click",login);

