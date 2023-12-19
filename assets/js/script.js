var startButton = document.querySelector("#start-button");
var boxRules = document.querySelector(".box-rules");
var boxQuestions = document.querySelector(".box-questions");
var boxInitials = document.querySelector(".box-initials");
var boxLeaderboard = document.querySelector(".box-leaderboard");
var boxTimeLeft = document.querySelector("#timer");

var choice0 = document.querySelector("#choice0");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");



var questions = [
    {
        question: "Question 1: What symbol denotes an ID element in CSS?",
        choice0: "#",
        choice1: ".",
        choice2: "_",
        choice3: "There is no symbol for IDs.",
        correctChoice: "choice0"
    },
    {
        question: "Question 2: What symbol denotes a class element in CSS?",
        choice0: "#",
        choice1: ".",
        choice2: "_",
        choice3: "There is no symbol for IDs.",
        correctChoice: "choice1"
    },
    {
        question: "Question 3: What symbol denotes a class element in CSS?",
        choice0: "#",
        choice1: ".",
        choice2: "_",
        choice3: "There is no symbol for IDs.",
        correctChoice: "choice3"
    },
    {
        question: "Question 4: What symbol denotes a class element in CSS?",
        choice0: "#",
        choice1: ".",
        choice2: "_",
        choice3: "There is no symbol for IDs.",
        correctChoice: "choice2"
    }
]
var questionIndex = 0;

//new function for start timer
function setTimer() {
    var timeLeft = 120;
    var timeInterval = setInterval(function () {
        if(timeLeft > 1) {
            boxTimeLeft.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            boxTimeLeft.textContent = timeLeft + ' second remaining';
            timeLeft--;
          } else {
            boxTimeLeft.textContent = '';
            clearInterval(timeInterval);
            // windowlocation.href
        }
    }, 1000);   
}
setTimer();

//function that ends the quiz
function endQuiz() {
    //store score in local storage
    //then 
}

startButton.addEventListener("click", function() {
    boxRules.classList.add("hidden");
    boxQuestions.classList.remove("hidden");
    
    startOrNextQuestion();
    //start the timer function 
    //disable the button
})

function startOrNextQuestion() {

    //TODO: check if questionIndex is out of bounds (so check questions.length)
    // Then if it is, time to hide questions box and show initials entry box, AND pause the timer
    document.querySelector("#question-text").textContent = questions[questionIndex].question
    document.querySelector("#choice0").textContent = questions[questionIndex].choice0
    document.querySelector("#choice1").textContent = questions[questionIndex].choice1
    document.querySelector("#choice2").textContent = questions[questionIndex].choice2
    document.querySelector("#choice3").textContent = questions[questionIndex].choice3

}


choice0.addEventListener("click", function() {
    var selectedChoice="choice0"
    if(questions[questionIndex].correctChoice===selectedChoice) {
    document.querySelector("#feedback").innerText="Correct"
} else {
    document.querySelector("#feedback").innerText="Incorrect"
}
questionIndex++;
startOrNextQuestion();
})
choice1.addEventListener("click", function() {
    var selectedChoice="choice1"
    if(questions[questionIndex].correctChoice===selectedChoice) {
    document.querySelector("#feedback").innerText="Correct"
} else {
    document.querySelector("#feedback").innerText="Incorrect"
}
questionIndex++;
startOrNextQuestion();
})
choice2.addEventListener("click", function() {
    var selectedChoice="choice2"
    if(questions[questionIndex].correctChoice===selectedChoice) {
    document.querySelector("#feedback").innerText="Correct"
} else {
    document.querySelector("#feedback").innerText="Incorrect"
}
questionIndex++;
startOrNextQuestion();
})
choice3.addEventListener("click", function() {
    var selectedChoice="choice3"
    if(questions[questionIndex].correctChoice===selectedChoice) {
    document.querySelector("#feedback").innerText="Correct"
} else {
    document.querySelector("#feedback").innerText="Incorrect"
}
questionIndex++;
startOrNextQuestion();
})