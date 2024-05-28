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

const countriesQuestions = [
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

   const mountainsQuestions = [
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

   const riversQuestions = [
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

   //category select function

const selectCategory = (category) => {
    switch(category) {
        case "countries":
          availableQuestions = [...countriesQuestions];
          document.getElementById("name").innerText = "";
          console.log('author');
          loadQuiz();
          break;
        case "mountains":
          availableQuestions = [...mountainsQuestions];
          document.getElementById("name").innerText = "";
          loadQuiz();
          break;
        case "rivers":
          availableQuestions = [...riversQuestions];
          document.getElementById("name").innerText = "";
          loadQuiz();
          break;
        }
    };

// load quiz


const loadQuiz = () => {
    questionCounter = 0;
    score = 0;
    getNewQuestion();
  };

  
  