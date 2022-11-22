import { students_1 } from "./data.js";
import { teacher_1 } from "./data.js";
let teacher_id=sessionStorage.getItem("teacher_id")
var hamburger = document.querySelector(".hamburger");
var welcomemsg=document.querySelector("#welcome-msg")
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
const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Roll No.</th><th>Name</th><th>First Subject</th><th>Second Subject</th><th>Third Subject</th><th>Email</th></thead>";
for(var student of students_1){
    const newRow = document.createElement("tr");
    const tdrollno = document.createElement("td");
    const tdname = document.createElement("td");
    const tdsubject1 = document.createElement("td");
    const tdsubject2 = document.createElement("td");
    const tdsubject3 = document.createElement("td");
    const tdemail = document.createElement("td");
    tdrollno.textContent = student.rollno;
    tdname.textContent = student.name;
    tdsubject1.textContent = student.Subject1;
    tdsubject2.textContent = student.Subject2
    tdsubject3.textContent = student.Subject3;
    tdemail.textContent = student.mail;

    newRow.appendChild(tdrollno);
    newRow.appendChild(tdname);
    newRow.appendChild(tdsubject1);
    newRow.appendChild(tdsubject2);
    newRow.appendChild(tdsubject3);
    newRow.appendChild(tdemail);
    newTable.appendChild(newRow);
}
const target = document.getElementById('table');
target.appendChild(newTable);