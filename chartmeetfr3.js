document.addEventListener('DOMContentLoaded', function() {
     const questions = ["Je suis très mal à l'aise face aux conflits et j'évite d'y faire face", "Je suis peut-être trop persévérante ou perfectionniste", "Je n'arrive pas à me reposer et j'ai besoin d'être constamment occupé", "Je suis généralement plus anxieuse et inquiète que les autres personnes qui m'entourent",
"Je suis particulièrement fière d'être rationnelle et analytique", "J'ai tendance à être de mauvaise humeur et à être mélancolique", "Je mesure mon estime de soi principalement en fonction de mes réalisations", "Je suis une personne qui aime", "Je procrastine beaucoup", "Je ne peux m'empêcher d'être perfectionniste", "J'ai besoin de jongler avec beaucoup de balles en permanence pour ne pas m'ennuyer", "Je suis hypervigilante et toujours à l'affût du danger",
"D'autres m'ont qualifiée de trop autoritaire", "Je peux paraître trop analytique et intellectuellement arrogante", "Je suis souvent agacée par les défauts et les fautes des autres", "Il est très important pour moi de plaire aux autres et de les avoir comme moi", "Je tiens à éviter de gérer les conflits au point qu'ils ne s'enveniment et qu'ils deviennent de véritables problèmes", "Mon statut et mon image publique sont importants pour moi", "Je suis souvent inquiet et très vigilant", "suis très critique à l'égard de moi-même", "J'aime que les choses soient très ordonnées et organisées",
"Je peux faire preuve de confrontation et de force lorsque je dois faire avancer les choses", "Lorsque je suis critiqué ou traité injustement, j'ai tendance à me retirer, à faire la moue ou à bouder", "J'ai tendance à intimider les autres avec l'intensité de mon esprit analytique", "Comparé aux autres, je fais plus plaisir aux gens, les sauve ou les flatte",
"La vie consiste à obtenir et à produire des résultats pour moi", "Les autres me disent que je suis trop perfectionniste", "Je procrastine lorsqu'il s'agit de tâches importantes mais désagréables", "Les autres me disent que je m'inquiète trop", "Je m'impatiente facilement avec les autres et interviens pour faire avancer les choses", "Je m'impatiente et je m'ennuie facilement et je veux quelque chose de différent",
"Quand je fais une erreur, je m'en veux", "Je peux être perçue comme étant froide et trop rationnelle", "Parfois, j'ai l'impression d'être une victime ou une martyre", "J'aime tellement aider les autres que je perds parfois de vue mes propres besoins et que je ressens du ressentiment", "Les circonstances du travail ou de la vie influent de manière significative sur mon bonheur",];
  
const questionToCategoryMap =  {
        0: 0, 8: 0, 16: 0, 27: 0, // Avoider
        12: 1, 14: 1, 20: 1, 29: 1, // Controler
        6: 2, 17: 2, 21: 2, 25: 2,
        4: 3, 13: 3, 23: 3, 32: 3,
        3: 4, 11: 4, 18: 4, 28: 4,
  7: 5, 15: 5, 24: 5, 34: 5,
  2: 6, 10: 6, 19: 6, 30: 6,
  1: 7, 9: 7, 26: 7, 31: 7,
  5: 8, 22: 8, 33: 8, 35: 8,
};

     
const categories = ["Éviter", "Contrôleur", "Hyper Achiever", "Hyper Rational", "Hyper Vigilant", "Plaiser", "Restless", "Stickler", "Victime",];
const categoryDescriptions = ["The Avoider met l'accent sur le positif et l'agréable de manière extrême. Cela permet d'éviter les tâches et les conflits difficiles et désagréables.", "Le contrôleur, basé sur l'anxiété, doit prendre en charge et contrôler les situations et les actions des personnes à sa guise. Cela génère beaucoup d'anxiété et d'impatience lorsque cela n'est pas possible.", "L'Hyper-Achiever dépend d'une performance et d'un succès constants en matière de respect de soi et de validation de soi. Les dernières réalisations sont rapidement réduites, il en faut plus.",
"L'Hyper-Rational se concentre avec intensité et exclusivité sur le traitement rationnel de tout, y compris des relations. Elle peut être perçue comme insouciante, insensible ou intellectuellement arrogante.", "L'Hyper-Vigilant génère une anxiété intense et continue face à tous les dangers et à ce qui pourrait mal tourner. Cela crée une vigilance qui ne peut jamais s'arrêter.", "The Pleaser essaie indirectement de gagner en acceptation et en affection en aidant, en plaisant, en sauvant ou en flattant les autres. Il perd de vue ses propres besoins et en résulte un sentiment de rancœur.", "The Restless est constamment à la recherche d'une plus grande excitation lors de la prochaine activité ou d'une activité constante. Il est rarement en paix ou content de l'activité en cours.", "Le Stickler recherche le perfectionnisme et un besoin d'ordre et d'organisation poussés trop loin. Il vit dans l'anxiété en essayant de perfectionner trop de choses.", "La victime est émotive et capricieuse pour gagner de l'attention et de l'affection. Il met trop l'accent sur les sentiments intérieurs, en particulier ceux qui sont douloureux.",
];

const responseLabels = ["Tout à fait en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];
    
const categoryScores = new Array(9).fill(0);
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
    if (!selectedOption) return; // Safety check
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
