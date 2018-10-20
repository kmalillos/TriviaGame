$(document).ready(function () { 

   

// --- Global Variables ---

var timer = 30; 
var interval;

var triviaGame = [ 
    {   question: "What is Steve Rogers' superhero name?" , 
        choices: ["Spiderman", "Dr. Strange", "Captain America", "Winter Soldier"] ,
        answer: "Captain America" // 3
    } , 
    {   question: "What color is the Hulk?" , 
        choices: ["purple", "green", "red", "blue"] ,
        answer: "green" // 2
    } , 
    {   question: "Who is the God of Thunder?" , 
        choices: ["Loki", "Thor", "Ironman", "Hulk"] ,
        answer: "Thor" // 2
    } , 
    {   question: "Where is the Black Panther from?" , 
        choices: ["Ultron", "Sokovia", "Asgaard", "Wakanda"] ,
        answer: "Wakanda" // 4
    } 
]

var correct = 0;
var incorrect = 0;


// --- Functions ---

    // to start timer
function startTimer () {
        interval = setInterval(decrement, 1000); // decrease by 1 sec
}

    // to countdown timer
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

    // to stop timer
function stop () {
    clearInterval(interval);
}

function startGame() {
    $(".correct-holder").empty();
    $(".incorrect-holder").empty();
    correct = 0;
    incorrect = 0;
}

function displayTrivia () {

    var triviaText = $(".trivia-text");

    for (var i=0; i < triviaGame.length; i ++) {
        
        var questionHolder = $("<div>");
            questionHolder.addClass("question");
            questionHolder.attr('id', ("question-"+i));
            questionHolder.append(triviaGame[i].question)     
        
        triviaText.append(questionHolder);

        for (var j=0; j < triviaGame.length; j++) {
            var choicesHolder = $("<input>");
                choicesHolder.addClass("choice");
                choicesHolder.attr('id', ("question-"+i+"-choice-"+j));
                choicesHolder.append(triviaGame[i].choices[j]);
        triviaText.append(choicesHolder);
        }
        
    }   

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

startGame();

displayTrivia();


// trivia ends when submitted (- or when time runs out, another function)
$("#submit-button").on("click", function() {
    $(this).hide();   // submit button hides
    $(".trivia-page").hide(); // trivia page hides
    $(".results-page").show(); // results page shows
    $("#results-text").text("Results Here!");
});


});