const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progress-text");
const scoreText = document.querySelector("#score");

let currentQuestion = {};
let acceptedAnswers = true;
let  score = 0;
let counter = 0;
let questionsLeft = [];

let questions = [
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    },
    {
        question: "What is the answer",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: 1, 
    } 
]

const SCORE_POINTS = 100;
const MAX_QUESTION = 11;

startGame =() => {
    questionCounter = 0;
    score = 0;
    questionsLeft = [...question]
    getNewQuestions()

}

getNewQuestions = () =>  {
    if(avalibleQuestions.length === 0 || counter > MAX_QUESTIONS){
        localStorage.setItem("mostRecaentScore",score)

        return window.location.assign("/end.html")
    }
    counter++
    progressText.innerText = `Question ${questionCounter}  of ${MAX_QUESTION}`

    const questionIndex = Math.floor(Math.random()* questionsLeft.length)
    currentQuestion = avalibleQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset["number"]
        choice.innerHTML = currentQuestion["choice"+ number]
    })
    avalibleQuestions.splice(questionIndex, 1)

    acceptingAnswers = true;
}

choices.forEach(choices => {
    choices.addEventListener("click",e => {
        if(!acceptingAnswers) 
        return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer =selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct"){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        getNewQuestion()
    }, 1000)
})

incrementScore = num => {
    score +=num
    scoreText.innerText 
}
