//const quizElement = document.getElementById('quiz');
//const countryCategory = document.getElementById("countriescatagory");
//countryCategory.addEventListener('click' , openCategory);

//function openCategory() {
  
//  quizElement.classList.remove('hide');
//}

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
    question: 'What is the capital city of the United States of America?',
    choice1: 'New York',
    choice2: 'Los Angeles',
    choice3: 'Washington, D.C.',
    choice4: 'Chicago',
    answer: 3
  },
  {
    question: 'Which city is the capital of Japan?',
    choice1: 'Osaka',
    choice2: 'Tokyo',
    choice3: 'Kyoto',
    choice4: 'Hiroshima',
    answer: 2
  },
  {
    question: 'Name the capital city of Brazil.',
    choice1: 'Brasília',
    choice2: 'Rio de Janeiro',
    choice3: 'São Paulo',
    choice4: 'Salvador',
    answer: 1
  },
  {
    question: 'What is the capital city of the United Kingdom?',
    choice1: 'London',
    choice2: 'Birmingham',
    choice3: 'Edinburgh',
    choice4: 'Manchester',
    answer: 1
  },
  {
    question: 'Which city is the capital of Germany?',
    choice1: 'Frankfurt',
    choice2: 'Berlin',
    choice3: 'Munich',
    choice4: 'Hamburg',
    answer: 2
  }
]

   const mountainsQuestions = [

    {
      question: 'What is the highest mountain in the world?',
      choice1: 'Mount Kilimanjaro',
      choice2: 'Mount Everest',
      choice3: 'Mount McKinley',
      choice4: 'Mount Fuji',
      answer: 2
    },
    {
      question: 'Which mountain is known as the highest peak in Africa?',
      choice1: 'Mount Everest',
      choice2: 'Mount McKinley',
      choice3: 'Mount Kilimanjaro',
      choice4: 'Mount Elbrus',
      answer: 3
    },
    {
      question: 'Which mountain range is home to Mount Everest?',
      choice1: 'Rocky Mountains',
      choice2: 'Andes',
      choice3: 'Himalayas',
      choice4: 'Alps',
      answer: 3
    },
    {
      question: 'In which country is Mount Fuji located?',
      choice1: 'China',
      choice2: 'Japan',
      choice3: 'South Korea',
      choice4: 'Thailand',
      answer: 2
    },
    {
      question: 'Which mountain is the highest in the Alps?',
      choice1: 'Zugspitze',
      choice2: 'Mont Blanc',
      choice3: 'Matterhorn',
      choice4: 'Mount Elbrus',
      answer: 2
    }
  ]

   const riversQuestions = [

    {
      question: 'What is the longest river in the United States?',
      choice1: 'Missouri River',
      choice2: 'Mississippi River',
      choice3: 'Colorado River',
      choice4: 'Ohio River',
      answer: 1
    },
    {
      question: 'Which river is the longest in South America?',
      choice1: 'Paraná River',
      choice2: 'Amazon River',
      choice3: 'Orinoco River',
      choice4: 'Magdalena River',
      answer: 2
    },
    {
      question: 'What is the longest river in China?',
      choice1: 'Yellow River',
      choice2: 'Pearl River',
      choice3: 'Yangtze River',
      choice4: 'Mekong River',
      answer: 3
    },
    {
      question: 'Which river is the longest in Africa?',
      choice1: 'Congo River',
      choice2: 'Nile River',
      choice3: 'Niger River',
      choice4: 'Zambezi River',
      answer: 2
    },
    {
      question: 'What is the longest river in Europe?',
      choice1: 'Danube River',
      choice2: 'Rhine River',
      choice3: 'Volga River',
      choice4: 'Dnieper River',
      answer: 3
    }     
  ]

   //category select function

const selectCategory = (category) => {
    switch(category) {
        case "countries":
          availableQuestions = [...countriesQuestions];
          document.getElementById("category-name").innerText = "Countries Quiz";
          document.getElementById("name").innerText = "Countries Quiz";
          loadQuiz();
          break;
        case "mountains":
          availableQuestions = [...mountainsQuestions];
          document.getElementById("category-name").innerText = "Mountains Quiz";
          document.getElementById("name").innerText = "Mountains Quiz";
          loadQuiz();
          break;
        case "rivers":
          availableQuestions = [...riversQuestions];
          document.getElementById("category-name").innerText = "Rivers Quiz";
          document.getElementById("name").innerText = "Rivers Quiz";
          loadQuiz();
          break;
        }
    };

// load quiz


const loadQuiz = () => {
    questionCounter = 0;
    score = 0;
document.getElementById("quiz").classList.remove("hide");
document.getElementById("category").classList.add("hide");

    getNewQuestion();
  };

  //generate questions in random order

  const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      // Go to the end page
      console.log("end");
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
diplayFinalScore()
};
//display final score
function displayFinalScore() {
  document.getElementById("end").classList.remove("hide");
  document.getElementById("quiz").classList.add("hide");
}

//play again function
const playAgain = () => {
  questionCounter = 0;
    score = 0;
    document.getElementById("end").classList.add("hide");
    document.getElementById("category").classList.remove("hide");
 
}