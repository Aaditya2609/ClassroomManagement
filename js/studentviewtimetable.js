import { students_1 } from "./data.js";
let student_id=sessionStorage.getItem("student_id");
import { timetable } from "./data.js";
var hamburger = document.querySelector(".hamburger");
var sub1=document.querySelector('#sub1');
var sub1teacher=document.querySelector('#sub1teacher');
var sub2=document.querySelector('#sub2');
var sub2teacher=document.querySelector('#sub2teacher');
var sub3=document.querySelector('#sub3');
var sub3teacher=document.querySelector('#sub3teacher');
var studentname=document.querySelector("#student-name");
var studentcourse=document.querySelector("#student-course");
var sub1mon=document.querySelector("#sub1mon");
var sub1tue=document.querySelector("#sub1tue");
var sub1wed=document.querySelector("#sub1wed");
var sub1thu=document.querySelector("#sub1thu");
var sub1fri=document.querySelector("#sub1fri");
var sub1sat=document.querySelector("#sub1sat");
var sub2mon=document.querySelector("#sub2mon");
var sub2tue=document.querySelector("#sub2tue");
var sub2wed=document.querySelector("#sub2wed");
var sub2thu=document.querySelector("#sub2thu");
var sub2fri=document.querySelector("#sub2fri");
var sub2sat=document.querySelector("#sub2sat");
var sub3mon=document.querySelector("#sub3mon");
var sub3tue=document.querySelector("#sub3tue");
var sub3wed=document.querySelector("#sub3wed");
var sub3thu=document.querySelector("#sub3thu");
var sub3fri=document.querySelector("#sub3fri");
var sub3sat=document.querySelector("#sub3sat");

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    })
var student={
        name:"",
        course:"",
        subject1:"",
        subject2:"",
        subject3:"",
        subject1teacher:"",
        subject2teacher:"",
        subject3teacher:"",
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
            student.subject1teacher=students.Sub1teacher;
            student.subject2teacher=students.Sub2teacher;
            student.subject3teacher=students.Sub3teacher;
            student.mail=students.mail
            
        }
    }


    for(var timetables of timetable)
    {
        if(student.subject1==timetables.subject)
        {
            sub1mon.innerText=timetables.monday;
            sub1tue.innerText=timetables.tuesday;
            sub1wed.innerText=timetables.wednesday;
            sub1thu.innerText=timetables.thursday;
            sub1fri.innerText=timetables.friday;
            sub1sat.innerText=timetables.saturday;
        }
        else if(student.subject2==timetables.subject)
        {
            sub2mon.innerText=timetables.monday;
            sub2tue.innerText=timetables.tuesday;
            sub2wed.innerText=timetables.wednesday;
            sub2thu.innerText=timetables.thursday;
            sub2fri.innerText=timetables.friday;
            sub2sat.innerText=timetables.saturday;
        }
        else if(student.subject3==timetables.subject)
        {
            sub3mon.innerText=timetables.monday;
            sub3tue.innerText=timetables.tuesday;
            sub3wed.innerText=timetables.wednesday;
            sub3thu.innerText=timetables.thursday;
            sub3fri.innerText=timetables.friday;
            sub3sat.innerText=timetables.saturday;
        }
    }
    studentname.innerText=student.name;
    studentcourse.innerText=student.course;
    sub1.innerText=student.subject1;
    sub1teacher.innerText=student.subject1teacher;
    sub2.innerText=student.subject2;
    sub2teacher.innerText=student.subject2teacher;
    sub3.innerText=student.subject3;
    sub3teacher.innerText=student.subject3teacher;