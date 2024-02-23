document.addEventListener('DOMContentLoaded', function() {
     const questions = [
"J'accorde la priorité au travail d'équipe et à la collaboration dans mon leadership.",
"J'adapte ma communication en fonction de mon public.",
"Je considère les conflits comme des opportunités de croissance et de compréhension.",
"J'inspire mon équipe grâce à une vision commune et à des objectifs clairs.",
"Je propose des commentaires constructifs pour le développement personnel.",
"J'adapte facilement mon style de leadership aux différentes situations.",
"J'identifie et j'encourage les futurs leaders potentiels au sein de mon équipe.",
"Je façonne activement la culture organisationnelle afin de l'aligner sur les valeurs et la mission.",
"Je sollicite régulièrement des commentaires et des auto-évaluations pour m'améliorer.",
"Je base mes décisions stratégiques sur une analyse complète des informations.",
"Je donne la priorité à l'établissement de la confiance et de la crédibilité auprès des équipes et des parties prenantes.",
"Je recherche et mets en œuvre activement des solutions et des technologies innovantes.",
"Je sollicite activement les commentaires des membres de l'équipe et des parties prenantes.",
"J'écoute activement et je m'efforce de comprendre le point de vue des autres.",
"Je règle les différends de manière efficace, en recherchant un terrain d'entente.",
"Je reconnais et célèbre les réussites individuelles et collectives.",
"J'ai fixé des objectifs ambitieux mais réalisables pour mon équipe.",
"Je reste ouvert aux nouvelles idées et je suis ouvert au changement.",
"J'encadre et coache activement les membres de l'équipe pour les aider à occuper des postes de direction.",
"Je favorise une culture de travail d'équipe, de collaboration et de soutien mutuel.",
"Je suis dévoué au développement et à la croissance personnels continus.",
"Je prends en compte les implications à court et à long terme de la prise de décision.",
"Je maintiens la transparence et une communication ouverte pour favoriser la confiance.",
"Je suis à l'aise avec la prise de risques calculée dans les entreprises entrepreneuriales.",
"J'aligne les objectifs de l'équipe sur la mission de l'organisation.",
"Je transmets des idées complexes avec clarté et pertinence.",
"J'adapte mon approche de résolution des conflits aux circonstances.",
"Je motive les membres de l'équipe à dépasser leurs propres attentes.",
"Je surveille et évalue en permanence les performances pour les améliorer.",
"Je suis à l'aise avec l'ambiguïté et l'incertitude.",
"Je formule des plans de succession clairs pour une transition sans heurts.",
"Je respecte des normes élevées d'éthique et d'intégrité au sein de mon équipe.",
"Je remédie de manière proactive à mes faiblesses en matière de leadership.",
"J'adapte ma stratégie à l'évolution des conditions et des tendances du marché.",
"Je donne constamment suite à mes engagements et à mes promesses.",
"Je favorise et récompense la créativité et l'innovation au sein de mon équipe.",
"Je cultive une culture d'équipe inclusive et collaborative.",
"Je gère les conversations difficiles avec empathie.",
"Je reste calme malgré la pression lors de la résolution du conflit.",
"Je donne l'exemple en fixant des normes élevées.",
"Je développe les talents et les capacités de mon équipe.",
"Je fais la promotion de l'expérimentation et de l'innovation.",
"Je crée des opportunités pour les membres de l'équipe d'assumer des rôles de direction.",
"J'inculque la discipline et la responsabilité dans les processus de travail.",
"Je considère les défis comme des perspectives d'amélioration personnelle.",
"J'évalue les risques et les avantages dans mes décisions stratégiques.",
"Je gère les informations confidentielles avec la plus grande intégrité.",
"Je considère les échecs comme des opportunités d'apprentissage et je fais preuve de résilience face au risque.",
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
  "Visionnaires collaboratifs", 
  "Communicateurs empathiques", 
  "Résolveurs de conflits adaptatifs", 
  "Catalyseurs motivationnels", 
  "Mentors de performance", 
  "Leaders flexibles", 
  "Architectes de succession", 
  "Influenceurs culturels", 
  "Navigateurs de croissance personnelle", 
  "Décideurs stratégiques", 
  "Créateurs de confiance", 
  "Preneurs de risques innovants",
    ];
const categoryDescriptions = [ 
"Ils excellent dans la promotion de la collaboration et de l'alignement au sein de leurs équipes et avec les parties prenantes. Ils possèdent les compétences nécessaires pour constituer des équipes solides et soudées.",
"Privilégiez une communication claire et adaptable, permettant ainsi une compréhension et une coopération efficaces dans divers contextes.",
"Faire preuve de compétence en matière de résolution de conflits et être capable d'adapter son approche à la situation spécifique, favorisant ainsi des solutions constructives.",
"Capable d'inspirer et d'impliquer les membres de l'équipe, tout en augmentant les niveaux de productivité et d'engagement.",
"Définissez les attentes et offrez des commentaires personnalisés en fonction de leur style, afin de favoriser la croissance et la productivité des membres de l'équipe.",
"Ils sont adaptables et peuvent adapter leur style de leadership à différentes situations et à des environnements changeants.",
"Des experts dans l'identification et le développement de successeurs potentiels aux styles similaires ou complémentaires, garantissant une transition en douceur du leadership.",
"Façonnez la culture organisationnelle en fonction de leur style, en promouvant les valeurs, le travail d'équipe, la discipline ou d'autres éléments culturels.",
"Travaillez activement au développement personnel en reconnaissant et en améliorant leurs forces et leurs faiblesses en matière de style de leadership.",
"Prenez des décisions stratégiques plus équilibrées et mieux informées, afin de contribuer au succès à long terme de l'organisation.",
"Donner la priorité à l'établissement de liens de confiance avec leurs équipes et leurs parties prenantes, en favorisant un environnement de respect et de confiance mutuelle.",
"Prenez des décisions éclairées en matière d'innovation et de gestion des risques, essentielles à la réussite entrepreneuriale.",
];
const responseLabels = ["Tout à fait en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
const categoryScores = new Array(12).fill(0);
let currentQuestionIndex = 0;

const questionnaireDiv = document.getElementById('questionnaire');
const nextBtn = document.getElementById('next-btn'); 
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
nextBtn.style.display = 'none';
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
                'rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)', 'rgba(251, 13, 149, 0.2)',
                'rgba(224, 0, 161, 0.2)', 'rgba(74, 63, 42, 0.2)',
                'rgba(150, 161, 94, 0.2)', 'rgba(128, 145, 214, 0.2)'
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
