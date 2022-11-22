import { students_1 } from "./data.js";
let student_id=sessionStorage.getItem("student_id");
var hamburger = document.querySelector(".hamburger");
var welcomemsg=document.querySelector("#welcome-msg")
var studentname=document.querySelector("#student-name")
var studentcourse=document.querySelector("#student-course")
var quizbutton=document.querySelector("#quiz")
var viewmarksbutton=document.querySelector("#marks")
var timetablebutton=document.querySelector("#timetable")
var profilebutton=document.querySelector("#profile")
var student={
    name:"",
    course:"",
    subject1:"",
    subject2:"",
    subject3:"",
    mail:""
}

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    })

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




welcomemsg.innerText="Welcome "+student.name;
studentname.innerText=student.name;
studentcourse.innerText=student.course;
quizbutton.addEventListener("click",function()
{
    window.location.replace("/quiz.html");
})
viewmarksbutton.addEventListener("click",function()
{
    window.location.replace("/studentviewmarks.html");
})
profilebutton.addEventListener("click",function()
{
    window.location.replace("/studentProfile.html");
})
timetablebutton.addEventListener("click",function()
{
    window.location.replace("/studentviewtimetable.html");
})
