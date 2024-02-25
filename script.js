const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal on Earth?", answer: "Blue Whale" }
];

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // Loop back to the first question
    }
    
    displayQuestion();
}

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    var randomQuestion = getRandomQuestion();
    
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

    const isCorrect = userAnswer.length == correctAnswer.length;

    console.log(isCorrect);

    if (isCorrect) {
        displayResult('Correct! Your answer is right.', 'correct');
        outputResult(true); // Output that the answer is correct
    } else {
        displayResult('Incorrect! Your answer is wrong.', 'wrong');
        outputResult(false); // Output that the answer is incorrect
    }
}

function displayResult(message, resultClass) {
    const resultElement = document.getElementById('result');
    
    resultElement.textContent = message;
    
    // Remove existing classes
    resultElement.classList.remove('correct', 'wrong');

    // Add the new resultClass after a delay for smoother transition
    setTimeout(function() {
        resultElement.classList.add(resultClass);
        resultElement.style.display = 'block'; // Display the result element
    }, 100);
}

function outputResult(isCorrect) {
    const outputElement = document.getElementById('output');
    
    if (isCorrect) {
        outputElement.textContent = 'Your answer is correct!';
        outputElement.style.color = '#2ECC71'; // Green color for correct answer
    } else {
        outputElement.textContent = 'Your answer is incorrect.';
        outputElement.style.color = '#E74C3C'; // Red color for incorrect answer
    }
}

// function displayResult(isCorrect) {
//     const resultElement = document.getElementById('result');
    
//     if (isCorrect) {
//         resultElement.textContent = 'Correct! Your answer is right.';
//         resultElement.classList.remove('wrong');
//         resultElement.classList.add('correct');
//     } else {
//         resultElement.textContent = 'Incorrect! Your answer is wrong.';
//         resultElement.classList.remove('correct');
//         resultElement.classList.add('wrong');
//     }

//     resultElement.style.display = 'block'; // Display the result element
// }
// Display the first random question when the page loads
displayQuestion();

function openUnit(name){
    const tabs = document.querySelector('.tab');
const tabViews = document.querySelectorAll('.unitView');
    if(name == 'home'){
        tabViews[0].removeAttribute("hidden")
        tabViews[1].setAttribute("hidden", "true");
        tabViews[2].setAttribute("hidden", "true");
        tabViews[3].setAttribute("hidden", "true");
        tabViews[4].setAttribute("hidden", "true");
        tabViews[5].setAttribute("hidden", "true");
        tabViews[6].setAttribute("hidden", "true");
    }else if(name == 'unit1'){
        tabViews[1].removeAttribute("hidden")
        tabViews[0].setAttribute("hidden", "true");
        tabViews[2].setAttribute("hidden", "true");
        tabViews[3].setAttribute("hidden", "true");
        tabViews[4].setAttribute("hidden", "true");
        tabViews[5].setAttribute("hidden", "true");
        tabViews[6].setAttribute("hidden", "true");
    } else if (name == 'unit2'){
        tabViews[2].removeAttribute("hidden")
        tabViews[0].setAttribute("hidden", "true");
        tabViews[1].setAttribute("hidden", "true");
        tabViews[3].setAttribute("hidden", "true");
        tabViews[4].setAttribute("hidden", "true");
        tabViews[5].setAttribute("hidden", "true");
        tabViews[6].setAttribute("hidden", "true");
    } else if (name == 'unit3'){
        tabViews[3].removeAttribute("hidden")
        tabViews[1].setAttribute("hidden", "true");
        tabViews[0].setAttribute("hidden", "true");
        tabViews[2].setAttribute("hidden", "true");
        tabViews[4].setAttribute("hidden", "true");
        tabViews[5].setAttribute("hidden", "true");
        tabViews[6].setAttribute("hidden", "true");
    } else if (name == 'unit4'){
        tabViews[4].removeAttribute("hidden")
        tabViews[1].setAttribute("hidden", "true");
        tabViews[2].setAttribute("hidden", "true");
        tabViews[0].setAttribute("hidden", "true");
        tabViews[3].setAttribute("hidden", "true");
        tabViews[5].setAttribute("hidden", "true");
        tabViews[6].setAttribute("hidden", "true");
    } else if (name == 'unit5'){
        tabViews[5].removeAttribute("hidden")
        tabViews[1].setAttribute("hidden", "true");
        tabViews[2].setAttribute("hidden", "true");
        tabViews[3].setAttribute("hidden", "true");
        tabViews[0].setAttribute("hidden", "true");
        tabViews[4].setAttribute("hidden", "true");
        tabViews[6].setAttribute("hidden", "true");
    } else if (name == 'cummulative'){
        tabViews[6].removeAttribute("hidden")
        tabViews[1].setAttribute("hidden", "true");
        tabViews[2].setAttribute("hidden", "true");
        tabViews[3].setAttribute("hidden", "true");
        tabViews[4].setAttribute("hidden", "true");
        tabViews[0].setAttribute("hidden", "true");
        tabViews[5].setAttribute("hidden", "true");
    }
}