import { teacher_1 } from "./data.js";
let teacher_id=sessionStorage.getItem("teacher_id");
var hamburger = document.querySelector(".hamburger");
var teachername=document.querySelector("#teacher-name")
var teacherpost=document.querySelector("#teacher-post")
var teachernamecard=document.querySelector("#teacher-name-card")
var teacherpostcard=document.querySelector("#teacher-post-card")
var teacherqual=document.querySelector("#teacher-qual")
var teachersubject=document.querySelector("#teacher-subject")
var teachermail=document.querySelector("#teacher-mail")
var teacherphone=document.querySelector("#teacher-phone")
var homebutton=document.querySelector("#home")
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
teachername.innerText=teacher.name;
teacherpost.innerText=teacher.designation;
teachernamecard.innerText=teacher.name;
teacherpostcard.innerText=teacher.designation;
teacherqual.innerText="Qualifications : "+teacher.qualifications;
teachersubject.innerText="Subject : "+teacher.subjects;
teachermail.innerText="📧 : "+teacher.mail;
teacherphone.innerText="📱 : "+teacher.phoneno;
homebutton.addEventListener("click",function()
{
    window.location.replace("/dashboardTeacher.html");
})