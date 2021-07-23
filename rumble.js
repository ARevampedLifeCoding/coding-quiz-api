const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// Timer
// document.addEventListener('DOMContentLoaded', () => {
//     const timeLeftDisplay = document.querySelector('#start-button')
//     timeLeft  = 10 

//     function countDown() {
//         setInterval(function(){
//             if(timeLeft <=  0 ) {
//                 clearInterbal(timeLeft = 0)
//             }
//             timeLeftDisplay.innerHTML = timeLeft
//             timeLeft -=1
//         },1000)
//     }
//     startBtn.addEventListener('click')
// })
var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " till end of quiz!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
    

  }, 1000);
}
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("/end.html");
    imgEl.setAttribute("src", "/end.html");
    mainEl.appendChild(imgEl);
  
  }
function sendMessage() {
    timeEl.textContent ="You Lose!";
    
    
}
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src=/end.html");
//   mainEl.appendChild(imgEl);



setTime();


let currentQuestion = {}
let acceptingAnswers = true
let score =  0 
let questionCounter  = 0
let availableQuestions = []

let questions   = [
    {
        question: 'What does JS stand for?',
        choice1: 'JavaScorpio',
        choice2: 'JavaSam',
        choice3: 'JavaScript',
        choice4: 'JavaSwine',
        answer: 3,
    },
    {
        question: 'What is JavaScript used for?',
        choice1: 'Making the page  pretty',
        choice2: 'Hyper Text MarkUp',
        choice3: 'Crashes The Webpage',
        choice4: 'Adds  functionality',
        answer: 4,
    },
    {
        question: 'What kind of language is JavaScript?',
        choice1: 'OPP scripting language',
        choice2: 'OOP scripting language',
        choice3: 'PPO scripting language',
        choice4: 'OPO scripting language',
        answer: 2,
    },
    {
        question: 'Is JavaScript easy?',
        choice1: 'Maybe',
        choice2: 'Yes',
        choice3: 'No',
        choice4: 'What is JavaScript',
        answer: 1,
    }
    
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 4

startGame =  () =>  {
    questionCounter = 0 
    score = 0 
    availableQuestions =  [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 ||  questionCounter >   MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width= `${(questions/MAX_QUESTIONS) * 100}%`

    const questionsIndex =  Math.floor(Math.random() * availableQuestions.length)
    currentQuestion =availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice  => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply =  selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        
        if(classToApply === 'correct')  {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore =  num =>  {
    score +=num
    scoreText.innerText = score
}

startGame()