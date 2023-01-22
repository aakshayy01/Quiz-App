const quizDB=[
    {
        question: "Q1:What is an operating system?",
        a:"interface between the hardware and application programs",
        b:"collection of programs that manages hardware resources",
        c:"system service provider to the application programs",
        d:"all of the mentioned",
        ans:"ans4"
    },
    {
        question: "Q2:Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
        a:"DML(Data Manipulation Language)",
        b:"Query",
        c:"Relational Schema",
        d:"DDL(Data Definition Language)",
        ans:"ans4"
    },
    {
        question: "Q3:What is the main function of the command interpreter?",
        a:" to provide the interface between the API and application program",
        b:"to handle the files in the operating system",
        c:"to get and execute the next user-specified command",
        d:"none of the mentioned",
        ans:"ans3"
    },
    {
        question: "Q4:In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        a:"Priority",
        b:"Round Robin",
        c:"Shortest Job First",
        d:"All of the mentioned",
        ans:"ans4"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questioncount=0;
let score=0;
const loadquestion=()=>{
    const questionlist=quizDB[questioncount];
    question.innerHTML=questionlist.question; 
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;

}
loadquestion();
const getcheckanser=()=>{
    let answer;
    answers.forEach((curanselem)=>{
        if(curanselem.checked){
            answer=curanselem.id;
        }
    });
    return answer;
};

const deselectall = () => {
    answers.forEach((curanselem)=>curanselem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedanswer= getcheckanser();
    // console.log(checkedanswer);
    if(checkedanswer=== quizDB[questioncount].ans){
         score++;
    };
    // upload next question
    questioncount++;
    deselectall();
    if(questioncount<quizDB.length){
       loadquestion();
    }
    else{
        showscore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class ="btn" onclick="location.reload()">play again</button>
        `;
        showscore.classList.remove('scoreAREA');
    }

    
});

