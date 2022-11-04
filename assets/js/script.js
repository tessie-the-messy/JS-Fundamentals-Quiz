// global variables
var start = document.querySelector(".start");
var timer = document.getElementById("timer");
var timeLeft = 120;
var qIndex = 0;
var questionEl = document.querySelector("#question");
var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");
var ans4 = document.querySelector("#ans4");
var entScore = document.querySelector(".ent-score")
var leader = document.querySelector(".leader-board")
var playAgain = document.querySelector(".refresh")
var questions = [{
    // first question
    title: "Finish the quote: To __, or not to __: that is the question",
    choices: ["Aye", "Be", "See", "Deee"],
    answer: "Be",},

    // second question
   { title: "Finish the quote:___,___! Wherefore art thou ___?",
    choices: ["l'il Romeo","Chad", "Romeo", "Homie"],
    answer: "Romeo"},

    // third question
    {title: "Finish the quote: Is this a ___ which I see before me, the handle toward my hand?",
    choices: ["dagger","needle", "cutlass", "backpack"],
    answer: "dagger"},

    // fourth question
    {title: "Finish the quote: Get thee to a ___.",
    choices: ["grocery store","medic", "nunnery", "tavern"],
    answer: "nunnery"},

    // fifth question
    {title: "Finish the quote: What light through yonder __ breaks.",
    choices: ["iPhone","heaven", "shadow", "window"],
    answer: "window"},
];
var leadBoard = [

]

//hiding score form and score board
entScore.style = "display: none;";
leader.style = "display: none;";

// Start button
start.addEventListener("click", function(){
    var questionArea = document.querySelector(".question-area");
    questionArea.style = "display: block;";
    var instructions = document.querySelector(".open-page");
    instructions.style = "display: none;";
    quiz();
    countdown();
});

// timer
function countdown() {
    setInterval(function () {
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = 0;
        }
    }, 1000);
}

// Quiz cycle
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
    }}

// Subtract 10 sec if wrong answer is chosen
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

//Your score(amount of time left) & enter initials form


// End screen with leaderboard and play again button
// playAgain.addEventListener("click", window.reload())
window.addEventListener("load", function(){
    playAgain.onclick = function() {
        location.reload(true);
    }
});