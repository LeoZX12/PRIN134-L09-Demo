// Select elements
const ingredientsList = document.getElementById('recipe-ingredients');
const instructionsList = document.getElementById('recipe-instructions');
const highlightIngredientsButton = document.getElementById('highlight-ingredients');
const checkInstructionsButton = document.getElementById('check-instructions');
const resetInstructionsButton = document.getElementById('reset-instructions');
const ingredientsHeader = document.querySelector('.headers:nth-child(3)');
const instructionsHeader = document.querySelector('.headers:nth-child(5)');
const cakeImage = document.getElementById('cake');

// Add event listeners
highlightIngredientsButton.addEventListener('click', highlightIngredients);
checkInstructionsButton.addEventListener('click', checkInstructions);
resetInstructionsButton.addEventListener('click', resetInstructions);
ingredientsHeader.addEventListener('click', animateIngredientsHeader);
instructionsHeader.addEventListener('click', animateInstructionsHeader);
cakeImage.addEventListener('click', animateCakeImage);

// Functions
function highlightIngredients() {
  const ingredients = ingredientsList.children;
  for (let i = 0; i < ingredients.length; i++) {
    if (i % 2 === 0) {
      ingredients[i].style.backgroundColor = 'pink';
    } else {
      ingredients[i].style.backgroundColor = 'none';
    }
  }
}

function checkInstructions() {
  setTimeout(() => {
    const instructions = instructionsList.children;
    for (let i = 0; i < instructions.length; i++) {
      instructions[i].classList.toggle("is-done");
    }
  }, 3000);
}

function resetInstructions() {
  const instructions = instructionsList.children;
  for (let i = 0; i < instructions.length; i++) {
    instructions[i].classList.remove("instructions","is-done");
  }
}

function animateIngredientsHeader() {
    ingredientsHeader.classList.add('animate__animated', 'animate__rollOut');
    setTimeout(() => {
      ingredientsHeader.classList.remove('animate__animated', 'animate__rollOut');
    }, 1000); // add a delay to remove the animation class
  }
  
  function animateInstructionsHeader() {
    instructionsHeader.classList.add('animate__animated', 'animate__rollOut');
    setTimeout(() => {
      instructionsHeader.classList.remove('animate__animated', 'animate__rollOut');
    }, 1000); // add a delay to remove the animation class
  }
  
  function animateCakeImage() {
    cakeImage.classList.add('animate__animated', 'animate__rollOut');
    setTimeout(() => {
      cakeImage.classList.remove('animate__animated', 'animate__rollOut');
    }, 1000); // add a delay to remove the animation class
  }