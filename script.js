const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal on Earth?", answer: "Blue Whale" }
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const randomQuestion = getRandomQuestion();
    
    questionContainer.innerHTML = `<p>${randomQuestion.question}</p>`;
    questionContainer.setAttribute('data-answer', randomQuestion.answer);

    // Display the answer vertically
    var container = document.getElementById('container');
    var answerText = document.createTextNode(randomQuestion.answer);
    container.appendChild(answerText);
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim(); // Trim whitespace
    const correctAnswer = 'Your Correct Answer'; // Replace with actual correct answer

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = 'Correct! Your answer is right.';
        document.getElementById('result').classList.remove('wrong'); // Remove wrong class
        document.getElementById('result').classList.add('correct');
    } else {
        document.getElementById('result').textContent = 'Incorrect! Your answer is wrong.';
        document.getElementById('result').classList.remove('correct'); // Remove correct class
        document.getElementById('result').classList.add('wrong');
    }

    // Display the result element
    document.getElementById('result').style.display = 'block';
}
// Display the first random question when the page loads
displayQuestion();