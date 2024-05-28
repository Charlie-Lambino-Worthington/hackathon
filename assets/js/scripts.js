const questionElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('btn--default'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const MAX_QUESTIONS = 5;
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
          document.getElementById("category-name").innerText = "";
          console.log('author');
          loadQuiz();
          break;
        case "mountains":
          availableQuestions = [...mountainsQuestions];
          document.getElementById("category-name").innerText = "";
          loadQuiz();
          break;
        case "rivers":
          availableQuestions = [...riversQuestions];
          document.getElementById("category-name").innerText = "";
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

  //generate questions in random order

  const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      // Go to the end page
      consolelog("end")
    }

 questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionElement.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];
  
      const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }
  
      selectedChoice.parentElement.classList.add(classToApply);
  
// increment score
setTimeout(() => {
    selectedChoice.parentElement.classList.remove(classToApply);
    getNewQuestion();
  }, 1000);
});
});

incrementScore = num => {
score += num;
scoreText.innerText = score;
};