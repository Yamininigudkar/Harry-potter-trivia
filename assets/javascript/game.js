//$(document).ready(function()
//{
    var question = [
    {
                  question : '1. Who was James Potter’s best man at his wedding?',
   possibleAnswers : ['A. Peter Pettigrew',
                       'B. Severus Snape',
                       'C. Remus Lupin',
                       'D.  Sirius Black' ],
             
    answer : 'D'
    },
   
   
    {
    question: ' 2.What do you have to say to make the Marauder’s Map go blank?',
    possibleAnswers: ['A. Mischiefmanaged',
                      'B. Mischief done',
                      'C. Mischief is done',
                      'D. Manage Mischief'],
    
    answer : 'A'
    },
 
    {
    question :'3. What creatures did Hagrid bring to his very first class?',
    possibleAnswers : ['A. Thestral',
                       'B. Dragons',
                       'C. Unicorns',
                       'D. Hipogrifffs'],
   
    answer : 'D'
    },
     
    {
    question : '4.What are the guards of Azkaban called?',
    possibleAnswers : ['A. Dementors',
                       'B. Tormenters',
                       'C. Detecter',
                       'D. Protecter'],
    
    answer : 'A'
    },

    {
    question : '5. What creature was Rita Skeeter’s animagus?',
    possibleAnswers : ['A.A Beetle',
                       'B. A Dog',
                       'C. A Lizard',
                       'D.  A Rat'],
    
    answer : 'A'
    },


    {
    question : '6. How many brothers does Ron Weasley have?',
    possibleAnswers : ['A. 6',
                       'B. 4',
                       'C. 3',
                       'D. 5'],
    
    answer : 'D'
    },


    {
    question : '7. What was Snape’s spell to guard the Sorcerer’s Stone?',
    possibleAnswers : ['A. A table of potions',
                       'B. A Chess Game',
                       "C.  Devil's Snare",
                       'D. Flying keys'],
    
    answer : 'A'
    },


    {
    question : '8. Where in Gringott bank is the Sorcerer’s Stone?',
    possibleAnswers : ['A. Vault-705',
                       'B. Vault-713',
                       'C. Vault-701',
                       'D. Vault-710'],
    
    answer : 'B'
    },
    

    {
    question : '9. What does Dumbledore tell Harry he sees in the Mirror of Erised?',
    possibleAnswers : ['A. Pair of socks',
                       'B. Pair of glasses',
                       'C. Pair of trousers',
                       'D. Pair of Gloves'],
   
    answer : 'D'
    },

    {
    question : "10. What is Voldemort's real name",
    possibleAnswers : ['A. Tom Dudley',
                       'B. Tom Diddle',
                       'C. Tom Riddle',
                       'D. Tom Fiddle'],
  
    answer : 'B'
    }];
    console.table(question)
///////////////////Global Variables////////////////////

    var correct = 0;
    var incorrect = 0;
    var totalQuestions = question.length;
    var currentQuestion = 0;
    console.log(totalQuestions)
    console.log(correct)
    //debugger;
    var questionElement= document.getElementById("question");
    var answer1 = document.getElementById("AnswerA");
    var answer2 = document.getElementById("AnswerB");
    var answer3 = document.getElementById("AnswerC");
    var answer4 = document.getElementById("AnswerD");
    var stopTimer = false;
   
    


      //////////// Audio Setup/////////////////////////
        // ===========

        // Create an audio element with JavaScript
        var audioElement = document.createElement("audio");

        // Set it's source to the location
        // of our Captain Planet theme song file.
        audioElement.setAttribute("src", "./assets/images/harry-potter.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });

        // Pause Button
        $(".pause-button").on("click", function() {
          audioElement.pause();

        });
 ///////Event handler for Play button   //////////////////////////////////////    

$("#play").on("click", function()    
 {
    console.log("its playing");
    $("#questionPanel").show();
    gameTimer(60);
    loadQuestion(0)

 

});

////////////////////Event handler for submit button/////////////////////////////
///////////////////Displays Answer/////////////////////////////
$("#submit").on("click", function()    
 {
    console.log("its playing");
    
    displayCorrectAnswer(currentQuestion);
       

});

////////////////Function to display question and answer options///////////////////
function loadQuestion(quesIndex)
{
    
    var ques = question[quesIndex];
       
    questionElement.textContent =ques.question;;
      
    answer1.textContent = ques.possibleAnswers[0];
    answer2.textContent = ques.possibleAnswers[1];
    answer3.textContent = ques.possibleAnswers[2];
    answer4.textContent = ques.possibleAnswers[3];
    
    console.log(ques.possibleAnswers[0]);

    

};

///////////////Function to display next question //////////////////////////////
function loadNextQuestion()
{
    //debugger;
    $("#questionPanel").show();
    $("#displayAnswer").empty();



    var selectedAns = document.querySelector("input[type=radio]:checked");
    if(!selectedAns)
    {
        alert("select a answer");
        return;
    }
    var answer = selectedAns.value;
    console.log(answer)
    console.log(question[currentQuestion].answer)
    if(question[currentQuestion].answer===answer)
    {
        correct++;
        console.log("correct:  " + correct)

    }
    selectedAns.checked = false;
    currentQuestion++;
    if(currentQuestion===totalQuestions-1)
    {
        $("#submit").text("Finish")
    }
    if(currentQuestion===totalQuestions)
    {
       
       stopTimer=true
       
        return;
    }

    loadQuestion(currentQuestion)

}

////////////Function to display results at the end /////////////

function displayResult()
{
        $("#questionPanel").fadeOut();
        $("#displayAnswer").hide();
        $("#result").show();
        var incorrect= totalQuestions - correct
         correctEl = $("<h3>")
         incorrectEl = $("<h3>")
         playAgain = $("<button>")
         playAgain.addClass("btn btn-result btn-lg");
         playAgain.attr("id", "playagain")
         playAgain.text("Play Again")
         correctEl.text("Correct answers: " + correct);
         incorrectEl.text("Incorrect answers: " + incorrect)
         $("#result").append(incorrectEl)
         $("#result").append(correctEl)
         $("#result").append(playAgain)
         $("#playagain").on("click",function()
         {
            console.log("restart")
            window.location.reload(true);
         })
            
         

}
////////Function to display correct answer after every question///////////////////
function displayCorrectAnswer(answerImage)

{
    

    var images =["./assets/images/ques1.gif","./assets/images/ques2.gif","./assets/images/ques3.gif","./assets/images/ques4.gif","./assets/images/ques5.gif","./assets/images/ques6.gif","./assets/images/ques7.gif","./assets/images/ques8.gif","./assets/images/ques9.gif","./assets/images/ques10.gif"]
    imageEl = $("<img>");

    var correctAns = $("<h2>");
    var quesDB = question[answerImage];
    var rightAns = "";
    switch(quesDB.answer)

    {
        case "A":
                rightAns=quesDB.possibleAnswers[0];
                break;


        case "B":
                rightAns=quesDB.possibleAnswers[1];
                break;

        case "C":
                rightAns=quesDB.possibleAnswers[2];
                break;
        case "D":
                rightAns=quesDB.possibleAnswers[3];
                break;
        default:
                break;


    }
    correctAns.text("Correct Answer:  " + rightAns);

    imageEl.attr("src", images[answerImage])
    $("#displayAnswer").append(correctAns)
    $("#displayAnswer").append(imageEl)
    $("#questionPanel").hide();
    
    setTimeout(loadNextQuestion,2000);
       

}



/////////////////////Timer Function //////////////////////////////////

function gameTimer(setTimeinSec)
{

    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() 
    {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() 
    {

      //  Decrease number by one.
      setTimeinSec--;

      //  Show the number in the #show-number tag.
      console.log(setTimeinSec)
      $("#timer").html("<h2>"+"Time: "+"00:00:" + setTimeinSec + "</h2>");


      //  Once number hits zero...
      if(stopTimer===true)
      {
        stopTimer = false
        stop()
        $("#questionPanel").fadeOut();
        displayResult();
      }
      if (setTimeinSec === 0) 
      {

        //  ...run the stop function.
        stop();
        $("#questionPanel").fadeOut();
        displayResult();
        
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() 
    {

      clearInterval(intervalId);

    }

    //  Execute the run function.
    run();
}


    




















  



   