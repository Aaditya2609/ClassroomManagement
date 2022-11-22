import { students_1 } from "./data.js";
let student_id=sessionStorage.getItem("student_id");
var hamburger = document.querySelector(".hamburger");
var sub1=document.querySelector('#sub1');
var sub1teacher=document.querySelector('#sub1teacher');
var sub1marks=document.querySelector('#sub1marks');
var sub2=document.querySelector('#sub2');
var sub2teacher=document.querySelector('#sub2teacher');
var sub2marks=document.querySelector('#sub2marks');
var sub3=document.querySelector('#sub3');
var sub3teacher=document.querySelector('#sub3teacher');
var sub3marks=document.querySelector('#sub3marks');
var studentname=document.querySelector("#student-name")
var studentcourse=document.querySelector("#student-course")
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
        subject1marks:"",
        subject2marks:"",
        subject3marks:"",
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
            student.subject1marks=students.Sub1Marks;
            student.subject2marks=students.Sub2Marks;
            student.subject3marks=students.Sub3Marks;
            student.mail=students.mail
            
        }
    }
    studentname.innerText=student.name;
studentcourse.innerText=student.course;
    sub1.innerText=student.subject1;
    sub1teacher.innerText=student.subject1teacher;
    sub1marks.innerText=student.subject1marks;
    sub2.innerText=student.subject2;
    sub2teacher.innerText=student.subject2teacher;
    sub2marks.innerText=student.subject2marks;
    sub3.innerText=student.subject3;
    sub3teacher.innerText=student.subject3teacher;
    sub3marks.innerText=student.subject3marks;