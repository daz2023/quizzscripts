document.addEventListener('DOMContentLoaded', function() {
 const questions = [
"Je me connais bien et prends mes décisions en confiance.",  
"J'ai une vision claire de ma vie idéale.",  
"J’ai un mindset ouvert axé sur la croissance.",  
"J’ai de l'énergie tout au long de la journée.",  
"Je ressens souvent un calme et une satisfaction intérieure.",  
"J'ai mis en place et je suis des habitudes bonnes pour moi.",  
"J'ai des outils pour fixer mes objectifs et prioriser mes tâches.",  
"Je me sens profondément connecté.e au monde qui m'entoure.",  
"Je suis à l'aise pour partager mes pensées et mes sentiments.",  
"Je définis et atteins des objectifs clairs dans ma vie pro et perso.",  
"Je crois en ma capacité à apprendre et à évoluer.",  
"Je suis en paix avec mon corps et je prends soin de lui.",  
"Je sais identifier et exprimer mes émotions.",  
"J'utilise des points de repère pour suivre mon hygiene de vie.",  
"Je minimise les interruptions lorsque je suis concentré.e.",  
"J’ai une vie spirituelle développée.",  
"Je me sens ancré.e et sûr.e de moi.",  
"Je suis constamment engagé.e dans la réalisation de mes objectifs.",  
"Les erreurs sont des occasions d'apprentissage précieuses.",  
"Ma condition physique est une priorité pour moi.",  
"Je suis ok avec le fait d’être parfois triste ou en colère.",  
"Je m’offre des récompenses pour renforcer mes bonnes habitudes.",  
"Je m'attaque en premier aux tâches les plus importantes.",  
"Je parle facilement avec des inconnus.",  
"Je tiens mes décisions sans problème.",  
"Je planifie et organise mon temps de manière efficace.",  
"Je pense que l'effort conduit à la maîtrise.",  
"Je me sens généralement calme et détendu.e.",  
"Le firness mental et le bonheur sont deux choses importantes pour moi.",  
"Mon environnement soutient ma routine.",  
"J'alloue du temps pour planifier efficacement.",  
"J'apprécie la solitude sans me sentir seul.e.",  
"Je donne la priorité à mes besoins, même si cela signifie que certains désapprouvent.",  
"J'accepte volontiers d’avoir des objectifs difficiles à atteindre.",  
"Je relève les défis et considère la peur comme faisant partie du progrès.",  
"Je fais du fitness mental et physique une priorité.",  
"Je pratique la pleine conscience et l'autoréflexion.",  
"Je fais preuve de compassion envers moi-même lorsque mes bonnes habitudes se dérobent.",  
"Je travaille dans le calme tout en respectant les délais.",  
"Je participe activement à plusieurs communautés.",  
"Je respecte mes limites et dis 'non' lorsque c'est nécessaire.",  
"Je me fixe des objectifs quotidiens pour optimiser mes journées.",  
"J'aborde les nouvelles expériences avec curiosité.",  
"Je ne souffre pas particulièrement d'un problème physique ou mental.",  
"J'exprime mon appréciation aux autres.",  
"Il m'est plus facile de revenir à de bonnes habitudes.",  
"Je planifie du temps pour la détente et le plaisir.",  
"J’ai souvent des conversations profondes.",
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
        "Bien Se Connaître",
        "Vision & Objectifs",
        "Mindset de Croissance",
        "Santé & Écoute de Soi",
        "Équilibre Emotionnel",
        "De Bonnes Habitudes",
        "Maitriser Son Temps",
        "Être Connecté.e",
    ];

    const categoryDescriptions = [
        "Se connaître soi-même avant de fixer ses objectifs. La connaissance de soi mène à une meilleure prise de décision, une meilleure gestion de ses émotions et un bonheur plus durable. Savoir apprécier sa propre valeur est essentiel pour son succès et son bien-être.",
        "Avoir une vision claire et des objectifs bien définis donnent une direction et une motivation à nos actions. Ça nourrit l’engagement et nous permet de surmonter les obstacles, de prendre nos responsabilités et prendre des décisions avec intentionnalité.",
        "Ton mindset façonne ta réalité. Un mindset de croissance te pousse à relever les défis, à apprendre de tes erreurs et à rester motivé.e même dans l'adversité. Avec le sens de l'effort, tu peux atteindre tes objectifs et devenir la meilleure version de toi-même.",
        "Ton corps est le véhicule qui porte ta performance dans la durée, il faut t’en occuper pour maintenir ton bien-être physique et mental. Un corps en bonne santé, c’est plus de vitalité, d’énergie, de positivité, plus de concentration et de résilience. C’est mettre toutes les chances de ton côté pour saisir les opportunités de la vie.",
        "Découvre les influences cachées derrière tes émotions et tes actions. Comprendre nos schémas émotionnels permet de mieux gérer nos réactions et d'adopter des comportements et des habitudes plus constructifs. Atteindre un équilibre émotionnel commence par la pleine conscience.",
        "Les petites actions du quotien contribuent grandement à ton succès et ton bonheur. Construire des habitudes positives, basées sur une motivation intrinsèque et la responsabilisation, permet un progresser régulierement et de façon importante à terme. Une routine solide libère du temps pour la créativité et l'innovation.",
        "Maitriser son temps est une qualité nécéssaire pour pouvoir prioriser ses actions, être efficace et moins stressé.e. Une gestion efficace du temps t’assure de pouvoir respecter tes deadlines et de maintenir une performance optimale. A l’inverse, mal gérer son temps équivaut souvent à des opportunités manquées et un stress accru.",
        "Prendre conscience de l'impact de nos actions sur les autres et accepter cette interconnexion. Lorsque tu nourris des relations fortes et te sens intégré.e dans une famille ou communauté, tu deviens plus bienveillant et empathique. Çaméliore également ta performance et ton bien-être. Se sentir déconnecté.e au contraire conduit au désengagement et à une efficacité réduite. Cette matrice révèle tes forces et tes domaines à développer, permettant une compréhension plus approfondie de ta performance et des huit facteurs qui y contribuent. Ces huits éléments sont interconnectés et se soutiennent mutuellement. L'équilibre émotionnel repose sur la connaissance de soi, et les habitudes positives contribuent à ta santé globale. Pour optimiser ton bien-être et ta performance, chaque catégorie compte.",
    ];

    const responseLabels = ["Fortement en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
    
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
    document.querySelector('.cta.short').style.display = 'flex'; 
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
