import { teacher_1 } from "./data.js";
let teacher_id=sessionStorage.getItem("teacher_id")
var hamburger = document.querySelector(".hamburger");
var welcomemsg=document.querySelector("#welcome-msg")
var teachername=document.querySelector("#teacher-name")
var teacherpost=document.querySelector("#teacher-post")
var studentbutton=document.querySelector("#student")
var attendancebutton=document.querySelector("#attendance")
var timetablebutton=document.querySelector("#timetable")
var profilebutton=document.querySelector("#profile")
var teacher={
    name:"",
    qualifications:"",
    subjects:"",
    designation:"",
    mail:"",
    phoneno:""
}

for (var teachers of teacher_1)
{
    console.log(teacher_id)
    if(teachers.teacherid==teacher_id)
    {
        teacher.name=teachers.name,
        teacher.qualifications=teachers.qualification,
        teacher.subjects=teachers.subject,
        teacher.designation=teachers.designation,
        teacher.mail=teachers.mail,
        teacher.phoneno=teachers.phone
    }
}

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    })
welcomemsg.innerText="Welcome "+teacher.name;
teachername.innerText=teacher.name;
teacherpost.innerText=teacher.designation;
studentbutton.addEventListener("click",function()
{
    window.location.replace("/viewStudents.html");
})
attendancebutton.addEventListener("click",function()
{
    window.location.replace("/teacherViewMarks.html");
})
profilebutton.addEventListener("click",function()
{
    window.location.replace("/teacherProfile.html");
})
timetablebutton.addEventListener("click",function()
{
    window.location.replace("/teacherViewTimetable.html");
})
