// declare variables
var start = document.querySelector(".start");

// Should this go below var question ?
start.addEventListener("click", function(){
    console.log(start);
    // Upon pressing start button, first question appears --- is everything that follows inside one giant function?
});

// questions var = [array]
var question = [{
    // first question
    title: "This is question 1",
    choices: ["a", "b", "c"],
    answer: "a",},

    // second question
   { title: "This is question 2",
    choices: ["a","b", "c"],
    answer: "c"},

    // third question
    {title: "This is question 3",
    choices: ["a","b", "c"],
    answer: "c"},

    // fourth question

    // fifth question
];

// Upon pressing a choice for a question, it will return whether user is correct or not
// Upon pressing next, the next question appears
for (var i=0; i < question.length; i++){
}


var timer = document.getElementById("timer");

function countdown() {
    var timeLeft = 120;

    setInterval(function () {
        if (timeLeft > 0) {
            timer.textcontent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = 0;
        }
    }, 1000);
}
//timer - needs to start when user presses start
// time being subtracted when user gets answer wrong
//If timeLeft = 0 then it sends user to "you lose" screen
// End screen with score and post your results form, score = amount of time left