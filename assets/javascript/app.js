$(document).ready(function () { 

   

// --- Global Variables ---


var timer = 30; 
var interval;
var userScore = 0;
var triviaGame = [
    {   question: "question" , 
        choices: ["choice1", "choice2", "choice3", "choice4"] ,
        answer: "answer" // index number
    } , 
    {   question: "question" , 
        choices: ["choice1", "choice2", "choice3", "choice4"] ,
        answer: "answer" // index number
    } , 
    {   question: "question" , 
        choices: ["choice1", "choice2", "choice3", "choice4"] ,
        answer: "answer" // index number
    } , 
    {   question: "question" , 
        choices: ["choice1", "choice2", "choice3", "choice4"] ,
        answer: "answer" // index number
    } 
]

// --- Functions ---

    // Timer Functions
function startTimer () {
        interval = setInterval(decrement, 1000); // decrease by 1 sec
}

function decrement () {
    timer--;
    $("#timer-text").text(timer);

        // when timer ends
    if (timer===0) {
        stop();
        $(".trivia-page").hide(); // trivia page hides
        $(".results-page").show(); // results page shows
        $("#results-text").text("Results Here!");
    }
}

function stop () {
    clearInterval(interval);
}


// --- Main Process ---

    // start button appears first
    // trivia and result pages are hidden from beginning
$(".trivia-page").hide();
$(".results-page").hide();

    // to START game after clicking start-button
$("#start-button").on("click", function() {
    $(this).hide();   // start button hides
    $(".trivia-page").show(); //trivia page shows
});

startTimer();

$("#trivia-text").text("Trivia Game Here!");


    // trivia ends when submitted (- or when time runs out, another function)
$("#submit-button").on("click", function() {
    $(this).hide();   // submit button hides
    $(".trivia-page").hide(); // trivia page hides
    $(".results-page").show(); // results page shows
    $("#results-text").text("Results Here!");
});

});