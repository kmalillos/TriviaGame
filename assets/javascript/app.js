$(document).ready(function () {  

// === GLOBAL VARIABLES === 
// ===========================================================================================================

var timer = 60; 
var interval;

var triviaGame = [ 
    {   question: "What color is the Hulk?" , 
        choices: ["Purple", "Green", "Red", "Blue"] ,
        answer: "Green" // 2
    } ,
    {   question: "What is Steve Rogers' superhero name?" , 
        choices: ["Spiderman", "Dr. Strange", "Captain America", "Winter Soldier"] ,
        answer: "Captain America" // 3
    } , 
    {   question: "Who is the God of Thunder?" , 
        choices: ["Loki", "Thor", "Ironman", "Hulk"] ,
        answer: "Thor" // 2
    } , 
    {   question: "Where is the Black Panther from?" , 
        choices: ["Ultron", "Sokovia", "Asgaard", "Wakanda"] ,
        answer: "Wakanda" // 4
    } ,    
    {   question: "What Infinity Stone does Vision have?" , 
        choices: ["Mind", "Soul", "Power", "Reality"] ,
        answer: "Mind" // 1
    },
    {   question: "How many actors named Chris star in the Marvel Cinematic Universe?" , 
        choices: ["1", "2", "3", "4"] ,
        answer: "3" // 3
    },
]

var correct = 0;
var incorrect = 0;


// === FUNCTIONS ===
// ===========================================================================================================-

// timer functionality

function startTimer () {
    interval = setInterval(decrementTimer, 1000); // decrease by 1 sec
}

function decrementTimer () {
    timer--;
    $("#timer-text").text(timer);

        // when timer ends
    if (timer===0) {
        stopTimer();
    }
}

function stopTimer () {
    clearInterval(interval);
    submitGame();
}

// trivia functionality

function displayTrivia () {

    var triviaText = $(".trivia-text");

    // to DISPLAY triviaGame questions
    for (var i=0; i < triviaGame.length; i ++) {
        // questionHolder = <div class="question"> triviaGame[i].question</div>
        var questionHolder = $("<div>");
            questionHolder.addClass("question");
            questionHolder.append(triviaGame[i].question)     
        triviaText.append(questionHolder);

        // to DISPLAY triviaGame choices
        for (var j=0; j < triviaGame[i].choices.length; j++) {
            // <input type="radio" value="triviaGame[i].choices[j]" name="question-i"> triviaGame[i].choices[j] <br>

            triviaText.append("<input type='radio' value='" + triviaGame[i].choices[j] + 
                                "' name='question-" + i + "'>" + triviaGame[i].choices[j] + "<br>");

        }   
    }
};

function submitGame () {

    for (var i=0; i<triviaGame.length; i++) {
        $.each($("input[name='question-"+ i + "']:checked"), function() {
            var userGuess = $(this).attr("value");
            if (userGuess === triviaGame[i].answer) {
                correct++;
            } else {
                incorrect++;
            }
        });
    };

    if ( correct + incorrect !== triviaGame.length ) {
        incorrect = triviaGame.length - correct;
    }

    $(".trivia-page").hide(); // trivia page hides
    $(".results-page").show(); // results page shows

    $("#correct-holder").text(correct);
    $("#incorrect-holder").text(incorrect);
};

function restartGame () {
// to do
}

// === MAIN PROCESS ===
// ===========================================================================================================

// trivia and result pages are hidden from beginning
$(".trivia-page").hide();
$(".results-page").hide();

// to START game after clicking start-button
$("#start-button").on("click", function() {
    $(".start-page").hide();   // start page hides
    $(".trivia-page").show(); //trivia page shows
});

// to CALL function that begins timer
startTimer();

// to CALL function that displays trivia 
displayTrivia();

// trivia ends when submitted (- or when time runs out, another function)
$("#submit-button").on("click", function() {
    stopTimer();
    $(this).hide();   
});

//     // restart game
// $("#restart-button").on("click", function() {
//     restartGame();
// });


});