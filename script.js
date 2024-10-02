// State management to track the current point in the story
let currentState = 0;

// Questions and choices for the game
const story = [
    {
        question: "You wake up in a haunted house. Where do you go?",
        choices: [
            { text: "Explore the Basement", nextState: 1 },

            { text: "Search the Attic", nextState: 2 },

            { text: "Investigate the Library", nextState: 3 }
        ]
    },
    {
        question: "You enter the basement. Do you:",
        choices: [
            { text: "Enter the creepy room", nextState: 4 },

            { text: "Open the rusty door", nextState: 5 }
        ]
    },
    {
        question: "You reach the attic. Do you:",
        choices: [
            { text: "Open the dusty chest", nextState: 6 },

            { text: "Investigate the broken window", nextState: 7 }
        ]
    },
    {
        question: "You enter the library. Do you:",
        choices: [
            { text: "Read the haunted book", nextState: 8 },
            { text: "Push the mysterious bookshelf", nextState: 9 }
        ]
    }
];

// Function to render the current question and choices
function renderQuestion() {

    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');

    answersContainer.innerHTML = '';

    // Get the current question
    const currentQuestion = story[currentState];
    questionContainer.innerText = currentQuestion.question;

    // Render the choices as buttons
    currentQuestion.choices.forEach(choice => {

        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentState = choice.nextState;
            renderQuestion();
        };
        answersContainer.appendChild(button);
    });
}

// Function to move to the next question (if needed)
function nextQuestion() {
    renderQuestion();
}


renderQuestion();
