const quizData = [
    { 
     question: "Which language runs in a web browser?", 
     a: "Java",
     b: "C",
     c: "Python",
     d: "JavaScript",
     correct: "d",
    }, 
    { question: "What does CSS stand for?",
     a: "Central Style Sheets", 
     b: "Cascading Style Sheets", 
     c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    }, 
    {
    question: "What does HTML stand for?",
     a: "Hypertext Markup Language",
     b: "Hypertext Markdown Language",
     c: "Hyperloop Machine Language",
     d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    }, 
    {
    question: "What year was JavaScript launched?",
     a: "1996", 
     b: "1995", 
     c: "1994", 
     d: "none of the above", 
     correct: "b",
    },
];

let currentNumber = 0;
let correctAnswer = 0;


function renderQuestion(currentNumber){
    const questionContainer = document.querySelector(".question_container");
    questionContainer.innerHTML = `<h3>${quizData[currentNumber].question}</h3>`;
    
    const options = document.getElementsByTagName("input");
    console.log(options);
    /*options.forEach(option => {
        console.log(option.id);
        const character = option.id;
        option.innerText = quizData[currentNumber][character];
    })*/
    //let selected = Array.from(options).filter(item => item.checked)[0];     
    console.log(questionContainer);
    //questionContainer.innerHTML = `<h3>You answered ${correctAnswer} questions correctly.</h3>`;
}

let submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderQuestion(currentNumber++);
})


