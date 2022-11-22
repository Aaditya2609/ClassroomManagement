import { teacher_1 } from "./data.js";
import {timetable} from "./data.js";
let teacher_id=sessionStorage.getItem("teacher_id")
var hamburger = document.querySelector(".hamburger");
var teachername=document.querySelector("#teacher-name")
var teacherpost=document.querySelector("#teacher-post")
var teacher={
    name:"",
    qualifications:"",
    subjects:"",
    designation:"",
    mail:"",
    phoneno:""
}
var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Day</th><th>Time</th></thead>";
for(var timetables of timetable)
{
    for(var i=0;i<days.length;i++)
    {
        if(teacher_id==timetables.teacherid)
    {
    const newRow = document.createElement("tr");
    const tdDay = document.createElement("td");
    const tdtime = document.createElement("td");
    var day=days[i].toLowerCase();
    tdDay.textContent = days[i];
    tdtime.textContent = timetables[day];
    newRow.appendChild(tdDay);
    newRow.appendChild(tdtime);
    newTable.appendChild(newRow);
    }
}
}
const target = document.getElementById('table');
target.appendChild(newTable);

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