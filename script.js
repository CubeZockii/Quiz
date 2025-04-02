const correctName = "Bella";  // Name deiner Freundin
const correctAge = 17;       // Ihr Alter

const questions = [
    { question: "Where was I recently", answer: "Italy" },
    { question: "When is my birthday?", answer: "3th September 2008" },
    { question: "What is your favorite thing about me?", answer: "" },
    { question: "Who is the Computer Freak", answer: "Him" },
    { question: "What is my favorite food?", answer: "Pizza" },
    { question: "What was his reaction after u said 'I love u too'", answer: "shocked" },
    { question: "Who is the more clingy Person?", answer: "Him" },
    { question: "Who said 'I love you' first?", answer: "Him" },
    { question: "Who fell in love as first", answer: "Him" },
    { question: "What is something I do that makes you smile?", answer: "Compliment Me" },
    { question: "If I had a pet, what would it be?", answer: "Cat" },
    { question: "What is my favorite Dessert ", answer: "Quark cake" }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let answers = [];

function checkCredentials() {
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);

    document.querySelector(".active").classList.remove("active");

    if (name === correctName && age === correctAge) {
        showQuiz();
    } else {
        document.getElementById("wrong-screen").classList.add("active");
    }
}

function showQuiz() {
    document.getElementById("quiz-screen").classList.add("active");
    displayQuestion();
}

function displayQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestionIndex].question;
    document.getElementById("answer").value = "";
}

function nextQuestion() {
    const userAnswer = document.getElementById("answer").value.trim();
    answers.push(userAnswer);

    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        correctAnswers++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showFinalMessage();
    }
}

function showFinalMessage() {
    document.querySelector(".active").classList.remove("active");
    document.getElementById("result-screen").classList.add("active");

    if (correctAnswers === questions.length) {
        document.getElementById("final-message").innerText = 
            "You got all answers right! That means... 💕";
        document.getElementById("confession").classList.remove("hidden");
    } else {
        document.getElementById("final-message").innerText = 
            "No matter the answers, you are the most special person to me! ❤️";
    }
}