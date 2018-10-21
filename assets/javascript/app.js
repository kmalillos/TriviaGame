$(document).ready(function () {  

// --- Global Variables ---

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


// --- Functions ---

    // to start timer
function startTimer () {
        interval = setInterval(decrementTimer, 1000); // decrease by 1 sec
}

    // to countdown timer
function decrementTimer () {
    timer--;
    $("#timer-text").text(timer);

        // when timer ends
    if (timer===0) {
        stopTimer();
    }
}

    // to stop timer
function stopTimer () {
    clearInterval(interval);
    submitGame();
}

function displayTrivia () {

    var triviaText = $(".trivia-text");

    // to DISPLAY triviaGame questions
    for (var i=0; i < triviaGame.length; i ++) {
        var questionHolder = $("<div>");
            questionHolder.addClass("question");
            questionHolder.append(triviaGame[i].question)     
        triviaText.append(questionHolder);

        // to DISPLAY triviaGame choices
        for (var j=0; j < triviaGame[i].choices.length; j++) {
            // var choicesHolder = $("<div>");
            //     choicesHolder.addClass("choice");
            //     choicesHolder.attr('value', triviaGame[i].choices[j]);
            //     choicesHolder.append(triviaGame[i].choices[j]);
            // triviaText.append(choicesHolder);

            // var choicesHolder = "<input type='radio' value='" + triviaGame[i].choices[j] + "' name='question-" + i + "'>" + triviaGame[i].choices[j] + "<br>"
            //     choicesHolder.attr("name", ("question-"+i))
            //     choicesHolder.attr("value", triviaGame[i].choices[j]);
            //     choicesHolder.text(triviaGame[i].choices[j])
            // triviaText.append(choicesHolder);

            triviaText.append("<input type='radio' value='" + triviaGame[i].choices[j] + 
                                "' name='question-" + i + "'>" + triviaGame[i].choices[j] + "<br>");

        }   
    }
};

// function selectChoices () {

//     $(".choice").on("click", function() {

//         //creates id to hook to css to change styles
//         console.log(this);
//         $(this).attr("id", "selectedChoice");

//         // determines if selected choice is correct 
//         for (var i=0; i < triviaGame.length; i ++) {
//             var selectedValue = $(this).attr("value");
//             if (selectedValue === triviaGame[i].answer) {
//                 correct++;
//             } 
//         }
//         console.log("Correct: " + correct);
//     });
// }

    // to SUBMIT game

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

}

// --- Main Process ---

        // start button appears first
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
    
    //      // to CALL function that selects choices
    // selectChoices();
    
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