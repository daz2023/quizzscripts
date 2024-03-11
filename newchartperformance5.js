document.addEventListener('DOMContentLoaded', function() {
 const questions = [
"I know myself well and make decisions confidently.",
"I have a clear vision for my ideal life.",
"I maintain an open and growth-oriented mindset.",
"I maintain high energy levels throughout the day.",
"I often experience calmness and contentment.",
"I establish and maintain positive habits.",
"I use goal-setting tools to prioritize tasks.",
"I feel deeply connected to the world.",
"I'm comfortable sharing my thoughts and feelings.",
"I set and achieve clear goals at work and in life.",
"I trust in my ability to learn and grow.",
"I feel at peace with and take care of my body.",
"I can identify and express my emotions.",
"I use cues to stay on track with my routines.",
"I minimize interruptions when focused.",
"I have a meaningful spiritual practice.",
"I feel grounded and self-assured.",
"I consistently follow through on my goals.",
"Mistakes are valuable learning opportunities.",
"My physical fitness is a priority.",
"I'm comfortable with occasional sadness or anger.",
"I reward myself to reinforce positive habits.",
"I tackle the most important tasks first.",
"I engage comfortably with strangers.",
"I stick to my decisions without wavering.",
"I plan and organize my time effectively.",
"I believe effort leads to mastery.",
"I usually feel calm and relaxed.",
"Mental fitness and happiness are both important to me.",
"My environment supports my routines.",
"I allocate time for effective planning.",
"I appreciate solitude without feeling lonely.",
"I prioritize my needs, even if it means not everyone agrees.",
"I willingly embrace challenging goals.",
"I embrace challenges and view fear as part of progress.",
"I prioritize mental and physical well-being.",
"I practice mindfulness and self-reflection.",
"I show self-compassion when routines lapse.",
"I work calmly while adhering to deadlines.",
"I actively participate in multiple communities.",
"I honor my boundaries and say 'no' when necessary.",
"I set daily intentions for a purposeful day.",
"I approach new experiences with curiosity.",
"I don’t particularly suffer from a physical or mental ailment.",
"I express appreciation to others.",
"Returning to positive habits is easier for me.",
"I schedule time for relaxation and enjoyment.",
"I engage in deep conversations regularly.",
  ];
  
     const questionToCategoryMap = { 
    0: 0, 8: 0, 16: 0, 24: 0, 32: 0, 40: 0,   
    1: 1, 9: 1, 17: 1, 25: 1, 33: 1, 41: 1,  
    2: 2, 10: 2, 18: 2, 26: 2, 34: 2, 42: 2, 
    3: 3, 11: 3, 19: 3, 27: 3, 35: 3, 43: 3,
    4: 4, 12: 4, 20: 4, 28: 4, 36: 4, 44: 4,
    5: 5, 13: 5, 21: 5, 29: 5, 37: 5, 45: 5,
    6: 6, 14: 6, 22: 6, 30: 6, 38: 6, 46: 6,
    7: 7, 15: 7, 23: 7, 31: 7, 39: 7, 47: 7,  
};

    const categories = [
        "Self-Awareness & Strengths",
        "Vision & Goal Alignment",
        "Empowering Mindset",
        "Vital Health & Self-Care",
        "Emotional Mastery",
        "Positive Daily Habits",
        "Efficient Time Mastery",
        "Connecting for Success",
    ];

    const categoryDescriptions = [
        "Know yourself before setting your course. Self-awareness leads to better decision-making, improved self-control, and lasting happiness. Understanding your worth is essential for achieving success and well-being.",
        "A clear vision and well-defined goals provide direction, motivation, and commitment. They empower you to overcome obstacles, stay accountable, and make purposeful decisions.",
        "Your mindset shapes your reality. A growth mindset, rooted in belief and effort, drives you to embrace challenges, learn from mistakes, and stay motivated even in adversity. With effort, you can reach your goals and become your best self.",
        "Your body is the vehicle for sustained performance. Health and self-care are essential for physical and mental well-being. They fuel your energy, positivity, focus, and resilience, helping you seize life's opportunities.",
        "Uncover the hidden influencers behind your actions and emotions. Understanding your emotional patterns empowers you to control your responses and adopt more constructive behaviors and habits. Achieving emotional balance starts with mindfulness.",
        "Small actions lead to success and happiness. Building positive habits, driven by intrinsic motivation and accountability, paves the way for efficient, consistent progress. A strong routine frees up time for creativity and innovation.",
        "Mastering time management is the key to prioritization, efficiency, and stress reduction. Effective time management ensures you meet deadlines and maintain peak performance. Poor time management can lead to missed opportunities and increased stress.",
        "Recognize the impact of your actions on others and embrace interconnectedness. Feeling connected enhances your performance and well-being, nurturing empathy, meaningful relationships, and community. Disconnection leads to disengagement and reduced productivity.",
    ];

    const responseLabels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Completely Agree"];
    
   const categoryScores = new Array(8).fill(0);
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
    // Hide the questionnaire UI elements
    questionnaireDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    document.getElementById('instructions').style.display = 'none';

    // Show the user information form container
    const userInfoFormContainer = document.getElementById('user-info-form-container');
    userInfoFormContainer.style.display = 'block';

    // Form submission handling
    const userInfoForm = document.getElementById('user-info-form');
    userInfoForm.onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect the data from the form
        const formData = new FormData(userInfoForm);
        const userData = {
            quizName: "Performance SustainAbility Check", // The name of your quiz
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email')
        };

        // Example POST request to an endpoint with the user's data
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

        // After submitting the form, proceed to show the final results
        displayFinalResults();
    };
}

function displayFinalResults() {
    // Hide the user info form container
    document.getElementById('user-info-form-container').style.display = 'none';

    // Display the results container
    resultContainer.style.display = 'block';
        
    let resultHTML = '';
    let labels = [];
    let dataPoints = [];
    let descriptions = []; // Array to hold category descriptions for use in tooltips
    categories.forEach((category, index) => {
        const categoryScore = categoryScores[index];
        document.querySelector('.ctaquizz.short').style.display = 'flex';
        const maxCategoryScore = 6 * 5; // Each category can score a max of 20 points
        const scorePercentage = (categoryScore / maxCategoryScore) * 100;
        resultHTML += `<h3>${category}: ${scorePercentage.toFixed(2)}%</h3><p>${categoryDescriptions[index]}</p>`;
        labels.push(category);
        dataPoints.push(scorePercentage);
        descriptions.push(categoryDescriptions[index]); // Add description to array
    });

    // Combine labels and dataPoints for sorting
    let combined = labels.map((label, i) => ({ label: label, dataPoint: dataPoints[i] }));
    // Sort in descending order of dataPoints (percentage)
    combined.sort((a, b) => b.dataPoint - a.dataPoint);

    // Extract sorted labels and dataPoints
    labels = combined.map(item => item.label);
    dataPoints = combined.map(item => item.dataPoint);

    // Update the text display with sorted results
    resultText.innerHTML = resultHTML;

    const data = {
        labels: labels, // Sorted category names
        datasets: [{
            label: 'Score Percentage',
backgroundColor: [
    'rgb(255, 99, 132)', 'rgb(255, 159, 64)',
    'rgb(255, 205, 86)', 'rgb(75, 192, 192)',
    'rgb(54, 162, 235)', 'rgb(153, 102, 255)',
    'rgb(201, 203, 207)', 'rgb(251, 13, 149)',
    'rgb(224, 0, 161)', 'rgb(74, 63, 42)',
    'rgb(150, 161, 94)', 'rgb(128, 145, 214)'
],
borderColor: [
    'rgb(255, 99, 132)', 'rgb(255, 159, 64)',
    'rgb(255, 205, 86)', 'rgb(75, 192, 192)',
    'rgb(54, 162, 235)', 'rgb(153, 102, 255)',
    'rgb(201, 203, 207)', 'rgb(251, 13, 149)',
    'rgb(224, 0, 161)', 'rgb(74, 63, 42)',
    'rgb(150, 161, 94)', 'rgb(128, 145, 214)'
],

            borderWidth: 1,
            data: dataPoints // Sorted score percentages
        }]
    };

 const ctx = document.getElementById('resultsChart').getContext('2d');
if (window.myResultsChart) {
    window.myResultsChart.destroy();
}
window.myResultsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y', // This specifies a horizontal bar chart
        scales: {
            x: {
                beginAtZero: true,
                max: 100, // Ensure the scale goes up to 100%
                ticks: {
                    callback: function(value) {
                        return value + "%";
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    afterBody: function(context) {
                        // Display the description in the tooltip
                        return descriptions[context[0].dataIndex];
                    }
                }
            }
        },
        animation: {
            onComplete: () => {}, // Optional: function to trigger when animation completes
            delay: (context) => {
                // Delay the animation for each bar based on its index to create a staggered effect
                return context.raw * 10; // Adjust the multiplier to control the delay between bars
            }
        }
    }
});
}

questionnaireDiv.addEventListener('change', function(event) {
    if (event.target && event.target.matches('input[type="radio"].response-option')) {
        handleNextQuestionAutomatically();
    }
});
nextBtn.addEventListener('click', handleNextButton);
displayQuestion(currentQuestionIndex);
});
