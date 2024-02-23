document.addEventListener('DOMContentLoaded', function() {
const questions = ["Je me connais bien et je prends des décisions en toute confiance.",
"J'ai une vision claire de ma vie idéale.",
"Je garde un état d'esprit ouvert et axé sur la croissance.",
"Je maintiens un niveau d'énergie élevé tout au long de la journée.",
"J'éprouve souvent du calme et de la satisfaction.",
"J'établis et je maintiens des habitudes positives.",
"J'utilise des outils de définition d'objectifs pour hiérarchiser les tâches.",
"Je me sens profondément connectée au monde.",
"Je suis à l'aise pour partager mes pensées et mes sentiments.",
"Je me fixe et j'atteins des objectifs clairs au travail et dans la vie.",
"J'ai confiance en ma capacité à apprendre et à m'épanouir.",
"Je me sens en paix avec mon corps et je prends soin de mon corps.",
"Je peux identifier et exprimer mes émotions.",
"J'utilise des repères pour rester sur la bonne voie avec mes habitudes.",
"Je minimise les interruptions lorsque je suis concentré.",
"J'ai une pratique spirituelle significative.",
"Je me sens bien ancrée et sûre de moi.",
"Je poursuis constamment mes objectifs.",
"Les erreurs sont de précieuses opportunités d'apprentissage.",
"Ma forme physique est une priorité.",
"Je suis à l'aise avec la tristesse ou la colère de temps en temps.",
"Je me récompense pour renforcer des habitudes positives.",
"Je m'attaque d'abord aux tâches les plus importantes.",
"Je communique confortablement avec des inconnus.",
"Je m'en tiens à mes décisions sans hésiter.",
"Je planifie et organise mon temps de manière efficace.",
"Je crois que l'effort mène à la maîtrise.",
"D'habitude, je me sens calme et détendue.",
"La santé mentale et le bonheur sont tous deux importants pour moi.",
"Mon environnement soutient mes habitudes.",
"Je consacre du temps à une planification efficace.",
"J'apprécie la solitude sans me sentir seule.",
"Je donne la priorité à mes besoins, même si cela signifie que tout le monde n'est pas d'accord.",
"J'accepte volontiers les objectifs ambitieux.",
"Je relève les défis et je considère que la peur fait partie du progrès.",
"Je donne la priorité au bien-être mental et physique.",
"Je pratique la pleine conscience et l'autoréflexion.",
"Je fais preuve de compassion envers moi-même lorsque les routines sont caduques.",
"Je travaille sereinement tout en respectant les délais.",
"Je participe activement à de nombreuses communautés.",
"Je respecte mes limites et je dis non lorsque c'est nécessaire.",
"Je fixe des objectifs quotidiens pour une journée pleine de sens.",
"J'aborde les nouvelles expériences avec curiosité.",
"Je ne souffre pas particulièrement d'une maladie physique ou mentale.",
"J'exprime ma reconnaissance aux autres.",
"Reprendre de bonnes habitudes est plus facile pour moi.",
"Je planifie du temps pour me détendre et m'amuser.",
"Je participe régulièrement à des conversations approfondies.",
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
       "Conscience de soi et forces", "Alignement de la vision et des objectifs", "Empowering Mindset", "Santé vitale et soins personnels", "Maîtrise émotionnelle", "Habitudes quotidiennes positives", "Maîtrise efficace du temps", "Connecter pour réussir",
    ];

    const categoryDescriptions = [
        "Connais-toi toi-même avant de fixer ton cap. La conscience de soi mène à de meilleures décisions, à une meilleure maîtrise de soi et à un bonheur durable. Comprendre votre valeur est essentiel pour atteindre le succès et le bien-être.", "Une vision claire et des objectifs bien définis fournissent une orientation, une motivation et un engagement. Ils vous permettent de surmonter les obstacles, de rester responsable et de prendre des décisions réfléchies.", "Votre état d'esprit façonne votre réalité. Un état d'esprit de croissance, ancré dans la conviction et l'effort, vous pousse à relever les défis, à apprendre de vos erreurs et à rester motivé même dans l'adversité. Avec des efforts, vous pouvez atteindre vos objectifs et devenir le meilleur de vous-même.", "Votre corps est le véhicule d'une performance durable. La santé et les soins personnels sont essentiels au bien-être physique et mental. Ils alimentent votre énergie, votre positivité, votre concentration et votre résilience, vous aidant à saisir les opportunités de la vie.", "Découvrez les influenceurs cachés qui se cachent derrière vos actions et vos émotions. Comprendre vos schémas émotionnels vous permet de contrôler vos réponses et d'adopter des comportements et des habitudes plus constructifs. Atteindre l'équilibre émotionnel commence par la pleine conscience.", "Les petites actions mènent au succès et au bonheur. L'adoption d'habitudes positives, motivées par une motivation et une responsabilité intrinsèques, ouvre la voie à des progrès efficaces et constants. Une routine rigoureuse permet de consacrer du temps à la créativité et à l'innovation.", "La maîtrise de la gestion du temps est la clé de la priorisation, de l'efficacité et de la réduction du stress. Une gestion efficace du temps vous permet de respecter les délais et de maintenir des performances optimales. Une mauvaise gestion du temps peut entraîner des opportunités manquées et une augmentation du stress.", "Reconnaissez l'impact de vos actions sur les autres et adoptez l'interdépendance. Le fait de vous sentir connecté améliore vos performances et votre bien-être, en favorisant l'empathie, les relations significatives et la communauté. La déconnexion entraîne un désengagement et une baisse de productivité.", ];

    const responseLabels = ["Tout à fait en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
    
   const categoryScores = new Array(8).fill(0);
    let currentQuestionIndex = 0;

    const questionnaireDiv = document.getElementById('questionnaire');
    const nextBtn = document.getElementById('next-btn'); // Ensure you have this button in your HTML
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
nextBtn.style.display = 'none';
  function displayQuestion(index) {
    const question = questions[index];
    questionnaireDiv.innerHTML = `<div class="question"><p>${question}</p></div>` + 
  createResponseOptions(index);
    updateProgressBar();
    updateQuestionNumber();
    
    // Attach event listeners to each radio button
    document.querySelectorAll('.response-option').forEach(option => {
        option.addEventListener('change', handleNextQuestionAutomatically);
    });
}

function handleNextQuestionAutomatically() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (!selectedOption) return; // Safety check

    // Ensure this part runs before inputs are disabled
    // Find the category this question belongs to and update the score
    const categoryIndex = questionToCategoryMap[currentQuestionIndex];
    categoryScores[categoryIndex] += parseInt(selectedOption.value);

    // Disable further input and show loading indicator
    document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`).forEach(radio => {
        radio.disabled = true;
    });
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.style.display = 'block';

    setTimeout(() => {
        loadingIndicator.style.display = 'none'; // Hide loading indicator
        
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 500); // Delay for showing the next question or results
}

  
function createResponseOptions(questionIndex) {
    const responseLabels = ["Tout à fait en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
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
    resultContainer.style.display = 'block';
    let resultHTML = '';
    let labels = [];
    let dataPoints = [];
    let descriptions = []; // Array to hold category descriptions for use in tooltips
    categories.forEach((category, index) => {
        const categoryScore = categoryScores[index];
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
