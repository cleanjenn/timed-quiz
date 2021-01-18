"use strict";

//start by creating DOM elements
var timerEl = document.querySelector('#timer');
mainEl = document.querySelector('#main');
questionEl = document.querySelector('#title');
messageEl = document.querySelector('#body');
startBtn = document.querySelector('#start-quiz');
resultEl = document.querySelector('#results'); //variables for questions and answers

var randQuestions = [{
  q: 'What does pseudo code mean?',
  choices: ['Hints of the Ocean', 'Thin noodles', 'Simplified Terms', 'Geometric Code'],
  a: 'c'
}, {
  q: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
  choices: ['The Users machine running a Web browser', 'The Web server', 'A central machine deep within Neptunes corporate offices', 'None of the above'],
  a: 'a'
}, {
  q: 'What are variables used for in JavaScript Programs?',
  choices: ['Storing numbers, dates, or other values', 'Varying randomly', 'Causing high-school algebra flashbacks', 'None of the above'],
  a: 'a'
}, {
  q: 'What should appear at the very end of your JavaScript ex. The <script LANGUAGE="JavaScript">tag',
  choices: ['The </script>', 'The <script>', 'The END statement', 'None of the above'],
  a: 'a'
}, {
  q: 'What is the correct JavaScript syntax to write "Hello World"?',
  choices: ['System.out.println("Hello World")', 'println ("Hello World")', 'document.write("Hello World")', 'response.write("Hello World")'],
  a: 'c'
}, {
  q: 'JavaScript entities start with _______ and end with _________.',
  choices: ['Semicolon, colon', 'Semicolon, Ampersand', 'Ampersand, colon', 'Ampersand, semicolon'],
  a: 'd'
}, {
  q: 'Using _______ statement is how you test for a specific condition.',
  choices: ['Select', 'If', 'Switch', 'For'],
  a: 'b'
}, {
  q: 'How to create a Date object in JavaScript?',
  choices: ['dateObjectName = new Date([parameters])', 'dateObjectName.new Date([parameters])', 'dateObjectName := new Date([parameters])', 'dateObjectName Date([parameters])'],
  a: 'a'
}, {
  q: 'The _______ method of an Array object adds and/or removes elements from an array.',
  choices: ['Reverse', 'Shift', 'Slice', 'Splice'],
  a: 'd'
}, {
  q: 'The syntax of close method for document object is ______________.',
  choices: ['Close(doC.', 'Close(object)', 'Close(val)', 'Close()'],
  a: 'd'
}]; //variables for timer 
//variables for answers right and wrong

var timer = 59;
indexNum = 0;
play = true;
correct = 0;
wrong = 0; //variables for score
//functions for timer, random question selection, quiz start

var countDown = function countDown() {
  var timeInterval = setInterval(function () {
    if (timer > 0 && play === true) {
      timerEl.innerText = timer;
      timer--;
    } else {
      timerEl.innerText = timer;
      timerEl.setAttribute('style', 'color: red;');
      clearInterval(timeInterval);
    }
  }, 1000);
}; //functions to start the quiz and timer by button 


var startQuiz = function startQuiz() {
  countDown();
  questionEl.setAttribute("style", "text-align: left;");
  messageEl.setAttribute("style", "margin-left: 25px; width: fit-content;");
  startBtn.remove();
  runQuiz();
}; //function to process through the quiz questions 


var runQuiz = function runQuiz() {
  if (indexNum === randQuestions.length) {
    //end the quiz is indexNum is null
    play = false;
  } else {
    var question = randQuestions[indexNum].q;
    choices = randQuestions[indexNum].choices;
    answer = randQuestions[indexNum].a;
    questionEl.textContent = question;
    messageEl.textContent = ''; //clear the div content

    for (var i = 0; i < options.length; i++) {
      var btnEl = document.createElement('button');
      btnEl.className = "btn choice-list";
      btnEl.setAttribute("btn-id", [i + 1]);
      btnEl.textContent = "".concat([i + 1], ", ").concat(options[i]);
      messageEl.appendChild(btnEl);
    }

    indexNum++;
  }
};

var choiceHandler = function choiceHandler(event) {
  var targetEl = event.target;

  if (targetEl.matches('.choice-list')) {
    var choiceID = targetEl.getAttribute('btn-id');
    choiceCompare(choiceID);
  }
}; //function to compare the users choice against the answer


var choiceCompare = function choiceCompare(choiceID) {
  if (choiceID === answer) {
    timer += 5;
    correct++;
    resultEl.innerText = 'Correct!';
    runQuiz();
  } else {
    timer -= 10;
    wrong++;
    resultEl.innerText = 'Wrong!';
    runQuiz();
  }
}; //functions for high score and local storage
//finish off with event listeners 


startBtn.addEventListener('click', startQuiz);