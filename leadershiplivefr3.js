document.addEventListener('DOMContentLoaded', function() {
 const questions = [
"Je donne la priorité au travail d'équipe et à la collaboration dans ma façon de diriger.",  
"J'adapte ma communication en fonction de mon audience.",  
"Je considère les conflits comme des occasions de développement et d’apprentissage.",  
"Je motive mon équipe en partageant une vision et des objectifs clairs.",  
"Je donne des feedbacks constructifs pour permettre à chacun de se développer.",  
"Je peux facilement ajuster mon style de leadership à différentes situations.",  
"J'identifie et nourris les futurs leaders potentiels au sein de mon équipe.",  
"Je façonne activement la culture organisationnelle de l’entreprise pour l'aligner sur ses valeurs et sa mission.",  
"Je cherche régulièrement des feedbacks et je m’auto-évalue pour pouvoir m'améliorer.",  
"Je fonde mes décisions stratégiques sur une analyse complète des informations.",  
"Je fais de la confiance et de la crédibilité une priorité avec mes équipes et autres parties prenantes.",  
"Je recherche activement et mets en œuvre des solutions et des technologies innovantes.",  
"Je sollicite activement l’avis des membres de l'équipe et autres parties prenantes.",  
"J'écoute activement et je m'efforce de comprendre le point de vue des autres.",  
"Je sais apaiser les conflits en cherchant un terrain d'entente.",  
"Je reconnais et célèbre les succès autant individuelles que collectifs.",  
"Je fixe des objectifs ambitieux mais réalisables pour mon équipe.",  
"Je reste ouvert.e aux nouvelles idées et au changement.",  
"Je coache et sponsore les membres de l'équipe prêts pour un rôle de leadership.",  
"Je promeus une culture de travail d'équipe, de collaboration et de soutien mutuel.",  
"Je fais du développement personnel une priorité à part entière.",  
"Je tiens compte des implications à la fois à court et à long terme dans ma prise de décision.",  
"J’ai une communication transparente et ouverte pour favoriser la confiance.",  
"Je suis à l'aise avec la prise de risques calculés dans une structure entrepreneuriale.",  
"J’aligne les objectifs de l'équipe avec la mission de l’entreprise.",  
"Je sais transmettre des idées complexes avec clarté et pertinence.",  
"J'adapte mon approche de la gestion des conflits en fonction des circonstances.",  
"J’invite les membres de l'équipe à dépasser leurs propres objectifs.",  
"Je monitore la performance en continu pour pouvoir l'améliorer.",  
"Je suis à l'aise avec l'ambiguïté et l'incertitude.",  
"Je définis des plans de succession clairs pour des transitions sans heurts.",  
"Je maintiens des standards éthiques et d'intégrité élevés au sein de mon équipe.",  
"J'aborde de manière proactive mes faiblesses en leadership.",  
"J'ajuste ma stratégie aux conditions et tendances du marché toujours en mouvement.",  
"Je tiens systématiquement mes engagements et mes promesses.",  
"Je favorise et récompense la créativité et l'innovation au sein de mon équipe.",  
"J'entretiens une culture d'équipe inclusive et collaborative.",  
"Je gère les conversations difficiles avec empathie.",  
"Je reste calme sous pression lors de la gestion de conflits.",  
"Je montre l'exemple en fixant des standards élevées.",  
"Je cultive les talents et les capacités de mon équipe.",  
"Je promeus l'expérimentation et l'innovation.",  
"Je crée des opportunités pour que les membres de l'équipe assument des rôles de leadership.",  
"J'instaure de la discipline et de la prise de responsabilité dans l’équipe.",  
"J'embrasse les défis comme des opportunités de progression.",  
"Je pèse le risk/reward dans les décisions stratégiques.",  
"Je gère les informations confidentielles avec la plus grande intégrité.",  
"Je vois les échecs comme des enseignements et suis résilient.e face aux risques.",
  ];
  
const questionToCategoryMap = {
    0: 0, 12: 0, 24: 0, 36: 0,  
    1: 1, 13: 1, 25: 1, 37: 1,
    2: 2, 14: 2, 26: 2, 38: 2,
    3: 3, 15: 3, 27: 3, 39: 3,
    4: 4, 16: 4, 28: 4, 40: 4,
    5: 5, 17: 5, 29: 5, 41: 5,
    6: 6, 18: 6, 30: 6, 42: 6,
    7: 7, 19: 7, 31: 7, 43: 7,
    8: 8, 20: 8, 32: 8, 44: 8,
    9: 9, 21: 9, 33: 9, 45: 9,
    10: 10, 22: 10, 34: 10, 46: 10,
    11: 11, 23: 11, 35: 11, 47: 11,
};
     
const categories = [
        "Le Collaborateur Visionnaire",
        "Le Communicant Empathique",
        "Le Médiateur Flexible",
        "Le Catalyste Enthousiaste",
        "Le Mentor de Croissance",
        "Le Leader Flexible",
        "L’Architecte des Transitions",
        "L’Influenceur Ethique",
        "L’Esprit Progressif",
        "Le Décideur Stratégique",
        "La Personne de Confiance",
        "Le Risk-Taker Innovant",
    ];
const categoryDescriptions = [ 
"Maîtrise la culture de la collaboration et de l'alignement, construisant ainsi des équipes solides et cohérentes.",
"Priorise une communication claire et versatile, favorisant ainsi une compréhension et une coopération efficaces.",
"Fait preuve de compétence en gestion de conflits et adapte son approche à chaque situation, favorisant ainsi des solutions constructives.",
"Capable d'inspirer ses équipes et d'initier l’engagement, stimulant ainsi des niveaux élevés de productivité.",
"Établit les attentes et fournit des feedbacks adaptés, favorisant le développement individuel et la performance d’équipe.",
"Adaptable et capable d'ajuster son style de leadership à différentes situations et environnements toujours en mouvement.",
"Expert dans l'identification et le développement de successeurs potentiels, assurant un passage de relais fluide.",
"Sais façonner une culture organisationnelle en fonction de son style, promouvoir des valeurs, le travail d'équipe, la discipline ou d'autres éléments culturels.",
"Forte capacité de remise en question personnel et travail actif à développer ses forces et travailler ses faiblesses.",
"Prend des décisions stratégiques plus équilibrées et mieux informées, contribuant au succès à long terme de l'organisation.",
"Donne la priorité à l’etablissement de la confiance avec ses équipes, favorisant un environnement de respect mutuel.",
"Capable de prendre des décisions éclairées et clé pour le succès de l’entreprise en matière d'innovation et de gestion des risques.",
];
const responseLabels = ["Fortement en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
const categoryScores = new Array(12).fill(0);
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
    const responseLabels = ["Fortement en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
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
    resultContainer.style.display = 'block';
    const questionNumberElement = document.getElementById('question-number');
    if (questionNumberElement) {
        questionNumberElement.style.display = 'none';
    }
    let resultHTML = '';
    let labels = [];
    let dataPoints = [];
    let descriptions = []; // Array to hold category descriptions for use in tooltips
    categories.forEach((category, index) => {
        const categoryScore = categoryScores[index];
        const maxCategoryScore = 4 * 5; // Each category can score a max of 20 points
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
