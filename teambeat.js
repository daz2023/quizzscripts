document.addEventListener('DOMContentLoaded', function() {
const questions = ["I consistently celebrate my team's achievements and hard work.", "I've received expressions of dissatisfaction regarding compensation from a few team members.",
"My team members have access to diverse learning opportunities, and I actively encourage their professional growth.", "Some team members have displayed signs of stress and encountered difficulties in maintaining a work-life balance.",
"My team is renowned for its strong collaboration, effective communication, and unity.", "I hold the belief that performance and well-being, or inclusion, at work are largely unrelated.",
"I've set clear, values-based performance expectations for my team.", "I take pride in our traditional approach to doing business, with a strong adherence to established practices within the team.",
"I actively support the learning and development of new skills.", "In our company, new ideas and creative solutions primarily originate from management.",
"I engage in open and transparent communication, even in a hybrid work environment.", "Time constraints frequently prevent me from providing valuable feedback to my team after completing tasks.",
"I regularly review my team's goals and aspirations, providing frequent feedback.", "I maintain limited hybrid work arrangements, I've observed challenges in achieving effective communication.",
"I actively help each team member define a clear career path and regularly review their career aspirations.", "I have limited insight into my team members' personal lives and activities outside of work.",
"My team comprises individuals from diverse backgrounds, and I encourage them to share their unique perspectives and experiences.",
"Some team members have called in sick on multiple occasions, leading me to question the validity of their absences.", "My team members engage together in social activities or events outside of work.",
"Our company's vision, if defined, often fails to resonate in our daily business operations.", "We have designated mentors or sponsors for new joiners to ensure a smooth transition.",
"Team members have reported dissatisfaction with our work processes.", "I consistently focus on my team members' individual potential, providing them opportunities for professional or personal growth.", "My team has experienced higher turnover rates, and finding qualified candidates has become an ongoing challenge.",
];
const questionToCategoryMap =  {
        0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 1: 1, 3: 1, 5: 1, 7: 1, 9: 1, 11: 1, 13: 1, 15: 1, 17: 1, 19: 1, 21: 1, 23: 1
};
const categories = ["PResults", "NResults"];
const categoryDescriptions = ["Empower Your Team's Potential, Did you know that according to Gallup's survey, a remarkable 87% of employees report low engagement, well-being, and performance levels? This concerning data results in reduced productivity and personal challenges. What's more, this study underlines the undeniable link between well-being and workplace performance. The great news? As a manager, leader, or entrepreneur, you play the central role in your team's performance and well-being. This means that with the knowledge you possess and the tools you can acquire, you have the potential to drive a transformation within your team. You hold the key to set a new rhythm, enhance engagement, and boost productivity. Ready to make a positive impact? Schedule a discovery call today! If you're unsure where to begin, explore our other quizzes and articles for valuable insights and actionable strategies.",
];
    const responseLabels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Completely Agree"]; 
    const categoryScores = new Array(2).fill(0);
    let currentQuestionIndex = 0;
    const startBtn = document.getElementById('start-btn');
    const introductionDiv = document.getElementById('introduction');
    const questionnaireDiv = document.getElementById('questionnaire');
    const nextBtn = document.getElementById('next-btn'); 
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    nextBtn.style.display = 'none';
  startBtn.addEventListener('click', function() {
    introductionDiv.style.display = 'none'; 
    document.getElementById('instructions').style.display = 'block'; 
    questionnaireDiv.style.display = 'block'; 
    nextBtn.style.display = 'none'; 
    displayQuestion(currentQuestionIndex); 
});
function displayQuestion(index) {
const question = questions[index];
questionnaireDiv.innerHTML = `<div class="question"><p>${question}</p></div>` + 
createResponseOptions(index);
updateProgressBar();
updateQuestionNumber();
document.querySelectorAll('.response-option').forEach(option => {
option.addEventListener('change', handleNextQuestionAutomatically);
    });
}
function handleNextQuestionAutomatically() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (!selectedOption) return; 
    const categoryIndex = questionToCategoryMap[currentQuestionIndex];
    categoryScores[categoryIndex] += parseInt(selectedOption.value);
    document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`).forEach(radio => {
        radio.disabled = true;
    });
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.style.display = 'block';
    setTimeout(() => {
        loadingIndicator.style.display = 'none'; 
        
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 500); 
}
function createResponseOptions(questionIndex) {
    const responseLabels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Completely Agree"];
    let optionsHTML = '<div class="f-steps-radio-btn-wrapper">';
    responseLabels.forEach((label, idx) => {
        const optionId = `question${questionIndex}_option${idx}`;
        optionsHTML += `
            <input type="radio" id="${optionId}" name="question${questionIndex}" value="${idx + 1}" class="response-option">
            <label for="${optionId}">${label}</label>
        `;
    });
    optionsHTML += '</div>';
    return optionsHTML;
}
function updateProgressBar() {
const progressBar = document.getElementById('progress-bar');
const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
progressBar.style.width = `${progress}%`;
}
function updateQuestionNumber() {
const questionNumberText = document.getElementById('question-number');
questionNumberText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}
function displayQuestion(index) {
const question = questions[index];
questionnaireDiv.innerHTML = `<div class="question"><p>${question}</p></div>` + createResponseOptions(index);
updateProgressBar();
updateQuestionNumber();
}
function handleNextButton() {
const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const categoryIndex = questionToCategoryMap[currentQuestionIndex];
    
    categoryScores[categoryIndex] += parseInt(selectedOption.value);

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    questionnaireDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
if (document.getElementById('question-number')) {
document.getElementById('question-number').style.display = 'none';
}
const userInfoFormContainer = document.getElementById('user-info-form-container');
userInfoFormContainer.style.display = 'block';
const userInfoForm = document.getElementById('user-info-form');
userInfoForm.onsubmit = function(event) {
event.preventDefault();
const quizName = "Team Beat";
const formData = new FormData(userInfoForm);
const userData = {
quizName: quizName,
firstName: formData.get('first-name'),
lastName: formData.get('last-name'),
email: formData.get('email')
};
fetch('https://hook.eu1.make.com/28eagcmztotd6kliyhqcece0cyy4e34q', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(userData),
})
.catch(error => {
console.error('Error sending data to the webhook:', error);
});
displayFinalResults();
    };
}
function displayFinalResults() {
document.getElementById('user-info-form-container').style.display = 'none';
const PResults = categoryScores[0];
const NResults = categoryScores[1];
const adjustedNResults = -NResults;
document.querySelector('.cta.short').style.display = 'flex';
const calculatedScore = (((PResults + adjustedNResults) / 12 + 4) / 8) * 100;
let resultHTML = `<p>${categoryDescriptions[0]}</p>`;
resultHTML += `<h3>Team Beat: ${calculatedScore.toFixed(2)}%</h3>`;
resultText.innerHTML = resultHTML;
const chartData = {
labels: ["Positive Score", "Negative Score"],
datasets: [{
data: [PResults, Math.abs(NResults)],
backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
borderWidth: 1
}]
};
const ctx = document.getElementById('resultsChart').getContext('2d');
if (window.myResultsChart) {
window.myResultsChart.destroy();
}
window.myResultsChart = new Chart(ctx, {
type: 'doughnut',
data: chartData,
options: {
responsive: true,
maintainAspectRatio: true,
plugins: {
legend: {
display: true
}
}
}
});
resultContainer.style.display = 'block';
}    
questionnaireDiv.addEventListener('change', function(event) {
if (event.target && event.target.matches('input[type="radio"].response-option')) {
handleNextQuestionAutomatically();
}
}); 
nextBtn.addEventListener('click', handleNextButton);
displayQuestion(currentQuestionIndex);
});
