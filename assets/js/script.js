//start by creating DOM elements
let timerEl = document.querySelector('#timer');
mainEl = document.querySelector('#main');
questionEl = document.querySelector('#title');
messageEl = document.querySelector('#body');
startBtn = document.querySelector('#start-quiz');
resultEl = document.querySelector('#results')
//variables for questions and answers
let randQuestions = [
    {
        q: 'What does pseudo code mean?',
        choices: ['Hints of the Ocean', 'Thin noodles', 'Simplified Terms', 'Geometric Code'],
        a: '3'
    },
    {
        q: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
        choices: ['The Users machine running a Web browser', 'The Web server', 'A central machine deep within Neptunes corporate offices', 'None of the above'],
        a: '1'
    },
    {
        q: 'What are variables used for in JavaScript Programs?',
        choices: ['Storing numbers, dates, or other values', 'Varying randomly', 'Causing high-school algebra flashbacks', 'None of the above'],
        a: '1'
    },
    {
        q: 'What should appear at the very end of your JavaScript ex. The <script LANGUAGE="JavaScript">tag',
        choices: ['The </script>', 'The <script>', 'The END statement', 'None of the above'],
        a: '1'
    },
    {
        q: 'What is the correct JavaScript syntax to write "Hello World"?',
        choices: ['System.out.println("Hello World")', 'println ("Hello World")', 'document.write("Hello World")', 'response.write("Hello World")'],
        a: '3'
    }, 
    {
        q: 'JavaScript entities start with _______ and end with _________.',
        choices: ['Semicolon, colon', 'Semicolon, Ampersand', 'Ampersand, colon', 'Ampersand, semicolon'],
        a: '4'
    }, 
    {
        q: 'Using _______ statement is how you test for a specific condition.',
        choices: ['Select', 'If', 'Switch', 'For'],
        a: '2'
    },
    {
        q: 'How to create a Date object in JavaScript?', 
        choices: ['dateObjectName = new Date([parameters])', 'dateObjectName.new Date([parameters])', 'dateObjectName := new Date([parameters])', 'dateObjectName Date([parameters])'],
        a: '1'
    },
    {
        q: 'The _______ method of an Array object adds and/or removes elements from an array.',
        choices: ['Reverse', 'Shift', 'Slice', 'Splice'],
        a: '4'
    },
    {
        q: 'The syntax of close method for document object is ______________.',
        choices: ['Close(doC.', 'Close(object)', 'Close(val)', 'Close()'],
        a: '4'
    }
];
//variables for timer 
//variables for answers right and wrong
let timer = 59;
indexNum = 0;
play = true;
correct = 0;
wrong = 0;
highScores = [];


//variables for score
//functions for timer, random question selection, quiz start
let countDown = function() {
    let timeInterval = setInterval(function (){
        if(timer > 0 && play === true) {
            timerEl.innerText = timer;
            timer--;
        } else {
            timerEl.innerText = timer;
            timerEl.setAttribute('style', 'color: red;');
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
};

//functions to start the quiz and timer by button 
let startQuiz = function() {
    countDown();
    questionEl.setAttribute("style", "text-align: left;");
    messageEl.setAttribute("style", "margin-left: 25px; width: fit-content;");
    startBtn.remove();
    runQuiz();
};
//function to process through the quiz questions 
let runQuiz = function() {
    if (indexNum === randQuestions.length) { //end the quiz is indexNum is null
        play = false;
    } else {
        let question = randQuestions[indexNum].q;
        choices = randQuestions[indexNum].choices;
        answer = randQuestions[indexNum].a;
        questionEl.textContent = question;
        messageEl.textContent = '';   //clear the div content
        for (i = 0; i < choices.length; i++) {
            let btnEl = document.createElement('button');
            btnEl.className = "btn choices-list";
            btnEl.setAttribute("btn-id", [i+1]);
            btnEl.textContent = `${[i+1]}, ${choices[i]}`;
            messageEl.appendChild(btnEl);
        }
        indexNum++;
    }
};

let choicesHandler = function(event) {
    let targetEl = event.target;
    if (targetEl.matches('.choices-list')) {
        let choicesID = targetEl.getAttribute('btn-id');
        choicesCompare(choicesID);
    }
};
//function to compare the users choice against the answer
let choicesCompare = function(choicesID) {
    if (choicesID === answer) {
        timer += 2;
        correct++;
        resultEl.innerText = 'Correct!';
        runQuiz();
    } else{
        timer -= 10;
        wrong++;
        resultEl.innerText = 'Wrong!';
        runQuiz();
    }
};
//stop the quiz after timer is out
let stopQuiz = function() {
    if(timer < 0) {
        timer = 0;
        timerEl.innerText = timer;
    }
    questionEl.removeAttribute("style");
    questionEl.textContent = "Let's see how well you know your Java!";
    messageEl.innerHTML = `<div>
        You got ${correct} questions correct and ${wrong} questions wrong.
        </div>
        <div>
        Your timer score is: ${timer}.
        </div>`;
    var formEl = document.createElement("form");
    formEl.setAttribute("id", "initials-form")

    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "user-initials");
    inputEl.className = "user-initials";
    inputEl.setAttribute("placeholder", "Enter Your Initials");
    formEl.appendChild(inputEl);

    var submitEl = document.createElement("button");
    submitEl.className = "btn";
    submitEl.setAttribute("id", "save-initials");
    submitEl.setAttribute("type", "submit");
    submitEl.textContent = "Submit";
    formEl.appendChild(submitEl);
    messageEl.appendChild(formEl);
};
//functions for high score and local storage
let highScore = function(event) {
    event.preventDefault();

    targetEl = event.target; 
    if (targetEl.matches("#save-initials")) { 
        formEl = document.querySelector(".user-initials");
        userInitials = formEl.value

        if (!userInitials) { 
            alert("Please enter your initials before moving on!");
            return false;
        } else {
            var highScoreObj = {
                initials: userInitials,
                score: timer
            };
            highScores.push(highScoreObj);
            localStorage.setItem("scores", JSON.stringify(highScores));
            location.replace("./highscore.html");
        }
    }
};
// add function to sore the data and load the scores
loadScores = function() {
    highScores = localStorage.getItem("scores");
    if (!highScores) {
        highScores = [];
        return false;
    }
    highScores = JSON.parse(highScores);
};
//finish off with event listeners 
startBtn.addEventListener('click', startQuiz);
messageEl.addEventListener('click', choicesHandler);
mainEl.addEventListener("click", highScore);

loadScores();