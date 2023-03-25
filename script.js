const submit = document.getElementById("submit");
let question = document.getElementById("question");

let num1 = getRandomNumber();
let num2 = getRandomNumber();

let score = 0;


askQuestion();


function askQuestion(){
    question.innerText = "What is " + num1 + " multiply by " + num2 + " ?";
}


function checkAnswer(){
    let answer = +document.getElementById("answer").value;
    if(answer === num1 * num2) {
        document.getElementById("score").innerText = "score: " + ++score;
    } else{
        console.log("incorrect!");
    }
    num1 = getRandomNumber();
    num2 = getRandomNumber();
    askQuestion();
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10)+1;
}