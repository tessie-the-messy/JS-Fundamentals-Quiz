// declare variables
var start = document.querySelector(".start");
var timer = document.getElementById("timer");
var timeLeft = 120;

var qIndex = 0
var questionEl = document.querySelector("#question")
var ans1 = document.querySelector("#ans1")
var ans2 = document.querySelector("#ans2")
var ans3 = document.querySelector("#ans3")
var ans4 = document.querySelector("#ans4")

var questions = [{
    // first question
    title: "This is question 1",
    choices: ["a", "b", "c", "d"],
    answer: "a",},

    // second question
   { title: "This is question 2",
    choices: ["a1","b1", "c1", "d1"],
    answer: "c1"},

    // third question
    {title: "This is question 3",
    choices: ["a2","b2", "c2", "d2"],
    answer: "c2"},

    // fourth question

    // fifth question
];





// Should this go below var question ?
start.addEventListener("click", function(){
    console.log(start);
    var questionArea = document.querySelector(".question-el");
    questionArea.style = "display: block;";
    var instructions = document.querySelector(".open-page");
    instructions.style = "display: none;";
    // Upon pressing start button, first question appears --- is everything that follows inside one giant function?
    //timer - needs to start when user presses start
    quiz();
    countdown()
});


function quiz(){
    questionEl.textContent = questions[qIndex].title
    ans1.textContent = questions[qIndex].choices[0];
    ans2.textContent = questions[qIndex].choices[1];
    ans3.textContent = questions[qIndex].choices[2];
    ans4.textContent = questions[qIndex].choices[3];
    if (qIndex == questions.length-1) {
        return;
    } else {
        qIndex++;
    }
// Upon pressing a choice for a question, it will return whether user is correct or not
}

function checkAns(){
    if (this.textContent!==questions[qIndex].answer) {
        timeLeft
    } 
}

ans1.addEventListener("click", function(e) { 
    if (e.target.textContent!==questions[qIndex].answer) {
        timeLeft -= 10
        console.log("test")
    } 
    quiz()
})
ans2.addEventListener("click", function(e) {
    if (e.target.textContent!==questions[qIndex].answer) {
        timeLeft -= 10
        console.log("test")
    } 
    quiz()
})
ans3.addEventListener("click", function(e) {
    if (e.target.textContent!==questions[qIndex].answer) {
        timeLeft -= 10
        console.log("test")
    } 
    quiz()
})
ans4.addEventListener("click", function(e) {
    if (e.target.textContent!==questions[qIndex].answer) {
        timeLeft -= 10
        console.log("test")
    } 
    quiz()
})

// timer var at line 3
function countdown() {
    setInterval(function () {
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            // console.log(timeLeft)
            timeLeft--;
        } else {
            timer.textContent = 0;
        }
    }, 1000);
}
// time being subtracted when user gets answer wrong
//If timeLeft = 0 then it sends user to "you lose" screen
// End screen with score and post your results form, score = amount of time left