document.addEventListener('DOMContentLoaded', function() {
 const questions = ["Je déteste les conflits et je les évite dès que je peux.",  
"Je peux être trop pointilleux ou perfectionniste.",  
"J’ai du mal à me reposer et je préfère être constamment occupé.",  
"Je suis généralement plus anxieux.se et inquièt.e que les autres autour de moi.",  
"Je suis assez fier.e d'être rationnel.le et analytique.",  
"J'ai tendance à être d'humeur maussade et mélancolique.",  
"Je mesure principalement ma valeur à travers mes réalisations.",  
"Je cherche à plaire aux autres.",  
"Je procrastine beaucoup.",  
"Je ne peux pas m'empêcher d'être perfectionniste.",  
"J'ai besoin de jongler avec beaucoup de choses en même temps pour éviter de m’ennuyer.",  
"Je suis hyper-vigilant.e et toujours à l'affût du danger.",  
"Certains me disent un peu trop dans le contrôle.",  
"Je peux donner l'impression d'être trop analytique et intellectuellement arrogant.",  
"Je suis souvent agacé.e par les défauts et les erreurs des autres.",  
"Faire plaisir et être apprécié.e des autres est très important pour moi.",  
"J'évite de gérer les conflits à un point où ils peuvent s’envenimer et devenir de vrais problèmes.",  
"Mon statut et mon image sont importants pour moi.",  
"Je suis souvent anxieux.se et très vigilant.e.",  
"Je suis très critique envers moi-même.",  
"J'aime que les choses soient très ordonnées et organisées.",  
"Je peux être clivant.e et autoritaire quand j'ai besoin de faire avancer les choses.",  
"Quand je suis critiqué.e ou traité.e de manière injuste, j'ai tendance à me retirer, à dédaigner ou à bouder.",  
"J’ai tendance à intimider les autres par l'intensité de mon esprit d’analyse.",  
"Comparé aux autres, je fais plus d'efforts pour plaire, aider ou complimenter les gens.",  
"Le plus important dans la vie pour moi c’est d’atteindre des objectifs et produire des résultats.",  
"Certains me disent que je suis trop perfectionniste.",  
"Je procrastine quand il s’agit de s’occuper des tâches importantes mais désagréables.",  
"Certains me disent que je m'inquiète trop.",  
"Je m'impatiente facilement et du coup, je prends les choses en main pour les faire avancer plus vite.",  
"Je m'impatiente et m'ennuie facilement, ça me donne envie de nouveauté.",  
"Quand je fais une erreur, je me critique sévèrement.",  
"Je peux être perçu.e comme froid.e et trop rationnel.le.",  
"Parfois, j’ai l’impression d’être victime ou martyr.",  
"Je suis tellement focus sur aider les autres que j’oublie parfois mes propres besoins et je développe du ressentiment.",  
"Les conditions du travail ou de vie affectent beaucoup mon bien-être.",];
  
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
     
const categories = ["Le Fuyant","Le Régisseur","L’Hyper-Performant","L’Hyper-Rationnel","L’Hyper-Vigilant","Le Charmeur","L’Effervescent","Le Perfectionniste","La Victime",];
const categoryDescriptions = [
  "Le Fuyant se concentre de manière extrême sur le positif et l'agréable. Il évite les tâches difficiles et désagréables ainsi que les conflits.",
  "Le Régisseur a besoin de prendre le contrôle des situations et des actions pour satisfaire son propre désir. Cela génère souvent une grande anxiété et de l'impatience lorsque ce n'est pas possible.",
  "L'Hyper-Performant dépend de sa constante performance et de ses résultats pour son estime de soi et sa validation personnelle. Ses dernières succès sont rapidement dévalués, et lui en faut toujours plus.",
  "L'Hyper-Rationnel se concentre intensément et exclusivement sur le traitement rationnel de tout, y compris des relations. Il peut être perçu comme insensible, froid ou intellectuellement arrogant.",
  "L'Hyper-Vigilant génère une anxiété intense et continue concernant tous les dangers et ce qui pourrait mal tourner. Cela crée une vigilance qui empêche de se reposer et de lâcher prise.",
  "Le Charmeur tente indirectement de gagner l'acceptation et l'affection en aidant, en plaisantant, en secourant ou en flattant les autres. Il perd de vue ses propres besoins et nourrit par la suite beaucoup de ressentiment.",
  "L’Effervescent recherche constamment une plus grande excitation dans sa prochaine activité ou restant toujours occupé. Il est rarement en paix ou satisfait de l'activité actuelle.",
  "Le Perfectionniste recherche la perfection et a besoin d'ordre et d'organisation poussé à l'extrême. Il vit dans l'anxiété en essayant de rendre trop de choses parfaites.",
  "La Victime est émotionnelle, capricieuse ou lunatique comme un moyen d’attirer l'attention et l'affection. Elle se concentre sur ses émotions, en particulier celles douloureuses. Reconnaître ses saboteurs et les comportements qu’ils génèrent est une prise de consciente importante. Développer ton fitness mental te permet d’entendre sans suivre ces voix intérieures qui sabotent ton bonheur et ta performance.",
];

const responseLabels = ["Fortement en désaccord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"];

    const categoryScores = new Array(9).fill(0);
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
            quizName: "Meet your Saboteurs", // The name of your quiz
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
