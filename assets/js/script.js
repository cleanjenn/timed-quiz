//start by creating DOM elements
let timerEl = document.querySelector('#timer');
let mainEl = document.querySelector('#main');
let questionEl = document.querySelector('#title');
let messageEl = document.querySelector('#body');
//variables for questions and answers
let randQuestions = [
    {
        q: 'What does pseudo code mean?',
        choices: ['Hints of the Ocean', 'Thin noodles', 'Simplified Terms', 'Geometric Code'],
        a: 'c'
    },
    {
        q: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
        choices: ['The Users machine running a Web browser', 'The Web server', 'A central machine deep within Neptunes corporate offices', 'None of the above'],
        a: 'a'
    },
    {
        q: 'What are variables used for in JavaScript Programs?',
        choices: ['Storing numbers, dates, or other values', 'Varying randomly', 'Causing high-school algebra flashbacks', 'None of the above'],
        a: 'a'
    },
    {
        q: 'What should appear at the very end of your JavaScript?', break 'The <script LANGUAGE="JavaScript">tag',
        choices: ['The </script>', 'The <script>', 'The END statement', 'None of the above'],
        a: 'a'
    },
    {
        q: 'What is the correct JavaScript syntax to write "Hello World"?',
        choices: ['System.out.println("Hello World")', 'println ("Hello World")', 'document.write("Hello World")', 'response.write("Hello World")'],
        a: 'c'
    }, 
    {
        q: 'JavaScript entities start with _______ and end with _________.',
        choices: ['Semicolon, colon', 'Semicolon, Ampersand', 'Ampersand, colon', 'Ampersand, semicolon'],
        a: 'd'
    }, 
    {
        q: 'Using _______ statement is how you test for a specific condition.',
        choices: ['Select', 'If', 'Switch', 'For'],
        a: 'b'
    },
    {
        q: 'How to create a Date object in JavaScript?', 
        choices: ['dateObjectName = new Date([parameters])', 'dateObjectName.new Date([parameters])', 'dateObjectName := new Date([parameters])', 'dateObjectName Date([parameters])'],
        a: 'a'
    },
    {
        q: 'The _______ method of an Array object adds and/or removes elements from an array.',
        choices: ['Reverse', 'Shift', 'Slice', 'Splice'],
        a: 'd'
    },
    {
        q: 'The syntax of close method for document object is ______________.',
        choices: ['Close(doC.', 'Close(object)', 'Close(val)', 'Close()'],
        a: 'd'
    }
];
//vaariables for timer 
//variables for answers right and wrong
//variables for score
//functions for timer, random question selection, quiz start
//functions for high score and local storage
//finish off with event listeners 