const questionElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('btn--default'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const MAX_QUESTIONS = 10;
const CORRECT_BONUS = 1;


//Questions Arrays

const authorQuestions = [
    {
      question: '?',
        choice1: '', 
        choice2: '', 
        choice3: '', 
        choice4: '',
        answer: 1
    },
    {
      question: '?',
        choice1: '',
        choice2: '', 
        choice3: '', 
        choice4: '', 
        answer: 4
      
    },
    {
        question: '?',
          choice1: '', 
          choice2: '',
          choice3: '', 
          choice4: '', 
          answer: 2
        
      },
      {
        question: '?',
          choice1: '',
          choice2: '', 
          choice3: '', 
          choice4: '',
        answer: 4
      },  
      {
        question: '',
          choice1: '', 
          choice2: '', 
          choice3: '', 
          choice4: '', 
        answer: 1
      },
     
   ]

   const authorQuestions = [
    {
      question: '?',
        choice1: '', 
        choice2: '', 
        choice3: '', 
        choice4: '',
        answer: 1
    },
    {
      question: '?',
        choice1: '',
        choice2: '', 
        choice3: '', 
        choice4: '', 
        answer: 4
      
    },
    {
        question: '?',
          choice1: '', 
          choice2: '',
          choice3: '', 
          choice4: '', 
          answer: 2
        
      },
      {
        question: '?',
          choice1: '',
          choice2: '', 
          choice3: '', 
          choice4: '',
        answer: 4
      },  
      {
        question: '',
          choice1: '', 
          choice2: '', 
          choice3: '', 
          choice4: '', 
        answer: 1
      },
     
   ]

   const authorQuestions = [
    {
      question: '?',
        choice1: '', 
        choice2: '', 
        choice3: '', 
        choice4: '',
        answer: 1
    },
    {
      question: '?',
        choice1: '',
        choice2: '', 
        choice3: '', 
        choice4: '', 
        answer: 4
      
    },
    {
        question: '?',
          choice1: '', 
          choice2: '',
          choice3: '', 
          choice4: '', 
          answer: 2
        
      },
      {
        question: '?',
          choice1: '',
          choice2: '', 
          choice3: '', 
          choice4: '',
        answer: 4
      },  
      {
        question: '',
          choice1: '', 
          choice2: '', 
          choice3: '', 
          choice4: '', 
        answer: 1
      },
     
   ]