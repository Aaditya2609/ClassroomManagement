import { students_1 } from "./data.js";
let student_id=sessionStorage.getItem("student_id");
var hamburger = document.querySelector(".hamburger");
var studentname=document.querySelector("#student-name")
var studentcourse=document.querySelector("#student-course")
var studentnamecard=document.querySelector("#student-name-card")
var studentcoursecard=document.querySelector("#student-course-card")
var studentsubject1=document.querySelector("#student-subject1")
var studentsubject2=document.querySelector("#student-subject2")
var studentsubject3=document.querySelector("#student-subject3")
var studentmail=document.querySelector("#student-mail")
var homebutton=document.querySelector("#home")


var student={
    name:"",
    course:"",
    subject1:"",
    subject2:"",
    subject3:"",
    mail:""
}
for (var students of students_1)
    {
        console.log(student_id)
        if(students.rollno==student_id)
        {
            student.name=students.name,
            student.course=students.course,
            student.subject1=students.Subject1,
            student.subject2=students.Subject2,
            student.subject3=students.Subject3,
            student.mail=students.mail
            
        }
    }

studentname.innerText=student.name;
studentcourse.innerText=student.course;
studentnamecard.innerText=student.name;
studentcoursecard.innerText=student.course;
studentsubject1.innerText="First Subject : "+student.subject1;
studentsubject2.innerText="Second Subject : "+student.subject2;
studentsubject3.innerText="Third Subject : "+student.subject3;
studentmail.innerText="📧 : "+student.mail;
homebutton.addEventListener("click",function()
{
    window.location.replace("/dashboardstudent.html");
})

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    })