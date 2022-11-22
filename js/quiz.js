import { students_1 } from "./data.js";
let student_id=sessionStorage.getItem("student_id");
var hamburger = document.querySelector(".hamburger");
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

var button=document.querySelector('#quiz-button');
var output=document.querySelector('#quiz-output');
var Form=document.querySelector(".quiz-form")
var correctAnswer=["90","rightangled","isosceles","obtuse","180"]
function clickHandler()
{
    var score=0;
    var i=0;
    var formResult=new FormData(Form);
    for(let value of formResult.values())
    {
        if(value===correctAnswer[i])
        {
            score++;
        }
        i++;
    }
    alert("Your Score Is "+score);
}

button.addEventListener("click",clickHandler);