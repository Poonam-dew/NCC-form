
/**const steps = document.querySelectorAll(".stepmain");
const circleSteps = document.querySelectorAll(".step_num");
const formInputs = document.querySelectorAll(".stepmain form input");

let currentStep = 0;
let currentCircle = 0;

function validateCurrentStep() {
  const currentFormInputs = formInputs[currentStep];
  return Array.from(currentFormInputs).every(input => input.checkValidity());
}

steps.forEach((step, index) => {
  const nextBtn = step.querySelector(".next");
  const prevBtn = step.querySelector(".go-back");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      step.style.display = "none";
      currentStep = Math.max(0, currentStep - 1);
      currentCircle = Math.max(0, currentCircle - 1);
      steps[currentStep].style.display = "flex";
      if (circleSteps[currentCircle]) {
        circleSteps[currentCircle].classList.remove("active");
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (event) => {
      event.preventDefault();
      
      // Check form validity including email validation
      if (validateCurrentStep()) {
        // Check specific input validity (e.g., email)
        const emailInput = steps[currentStep].querySelector("#email");
        if (emailInput && !emailInput.checkValidity()) {
          showError(emailInput);
          
        } else {
          // Check if all required fields are filled
          const requiredInputs = Array.from(steps[currentStep].querySelectorAll("input[required]"));
          const isAllRequiredFilled = requiredInputs.every(input => input.value.trim() !== '');

          if (isAllRequiredFilled) {
            step.style.display = "none";
            currentStep = Math.min(steps.length - 1, currentStep + 1);
            currentCircle = Math.min(circleSteps.length - 1, currentCircle + 1);
            steps[currentStep].style.display = "flex";
            if (circleSteps[currentCircle]) {
              circleSteps[currentCircle].classList.add("active");
            }
          } else {
            alert("Please fill out all required fields before proceeding.");
          }
        }
      } else {
        alert("Please fill out all required fields before proceeding.");
      }
    });
  }
});

function showError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement) {
    if (input.validity.valueMissing) {
      errorElement.textContent = "You need to enter an email address.";
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = "Entered value needs to be an email address.";
    } else if (input.validity.tooShort) {
      errorElement.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    }

    // Set the styling appropriately
    errorElement.className = "error active";
  }
}**/
/**

 const steps = document.querySelectorAll(".stepmain");
const circleSteps = document.querySelectorAll(".step_num");
const formInputs = document.querySelectorAll(".stepmain form input");

let currentStep = 0;
let currentCircle = 0;

function validateCurrentStep() {
  const currentFormInputs = formInputs[currentStep];
  return Array.from(currentFormInputs).every(input => input.checkValidity());
}

steps.forEach((step, index) => {
  const nextBtn = step.querySelector(".next");
  const prevBtn = step.querySelector(".go-back");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      step.style.display = "none";
      currentStep = Math.max(0, currentStep - 1);
      currentCircle = Math.max(0, currentCircle - 1);
      steps[currentStep].style.display = "flex";
      if (circleSteps[currentCircle]) {
        circleSteps[currentCircle].classList.remove("active");
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (event) => {
      event.preventDefault();

      // Check form validity including email validation
      if (validateCurrentStep()) {
        // Check specific input validity (e.g., email)
        const emailInput = steps[currentStep].querySelector("#email");
        if (emailInput && !emailInput.checkValidity()) {
          showError(emailInput);
        } else {
          // Check if all required fields are filled
          const requiredInputs = Array.from(steps[currentStep].querySelectorAll("input[required]"));
          const isAllRequiredFilled = requiredInputs.every(input => input.value.trim() !== '');

          if (isAllRequiredFilled) {
            step.style.display = "none";
            currentStep = Math.min(steps.length - 1, currentStep + 1);
            currentCircle = Math.min(circleSteps.length - 1, currentCircle + 1);
            steps[currentStep].style.display = "flex";
            if (circleSteps[currentCircle]) {
              circleSteps[currentCircle].classList.add("active");
            }
          } else {
            // Set custom validity directly on the input element
            requiredInputs.forEach(input => input.setCustomValidity("Please fill out all required fields before proceeding."));
          }
        }
      } else {
        // Set custom validity directly on the input element
        formInputs[currentStep].setCustomValidity("Please fill out all required fields before proceeding.");
      }
    });
  }
});

function showError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement) {
    if (input.validity.valueMissing) {
      errorElement.textContent = "You need to enter an email address.";
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = "Entered value needs to be an email address.";
    } else if (input.validity.tooShort) {
      errorElement.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    }

    // Set the styling appropriately
    errorElement.className = "error active";
  }
}**/
 const steps = document.querySelectorAll(".stepmain");
const circleSteps = document.querySelectorAll(".step_num");
const formInputs = document.querySelectorAll(".stepmain form input");

let currentStep = 0;
let currentCircle = 0;

function validateCurrentStep() {
  const currentFormInputs = formInputs[currentStep];
  return Array.from(currentFormInputs).every(input => input.checkValidity());
}

steps.forEach((step, index) => {
  const nextBtn = step.querySelector(".next");
  const prevBtn = step.querySelector(".go-back");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      step.style.display = "none";
      currentStep = Math.max(0, currentStep - 1);
      currentCircle = Math.max(0, currentCircle - 1);
      steps[currentStep].style.display = "flex";
      if (circleSteps[currentCircle]) {
        circleSteps[currentCircle].classList.remove("active");
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (event) => {
      event.preventDefault();

      // Check form validity including email validation
      if (validateCurrentStep()) {
        // Check specific input validity (e.g., email)
        const emailInput = steps[currentStep].querySelector("#email");
        if (emailInput) {
          if (!emailInput.checkValidity()) {
            showError(emailInput);
          } else {
            // Reset custom validity message when the input is valid
            emailInput.setCustomValidity("");
          }
        }

        // Check if all required fields are filled
        const requiredInputs = Array.from(steps[currentStep].querySelectorAll("input[required]"));
        const isAllRequiredFilled = requiredInputs.every(input => {
          if (!input.checkValidity()) {
            showError(input);
            return false;
          } else {
            // Reset custom validity message when the input is valid
            input.setCustomValidity("");
            return input.value.trim() !== '';
          }
        });

        if (isAllRequiredFilled) {
          step.style.display = "none";
          currentStep = Math.min(steps.length - 1, currentStep + 1);
          currentCircle = Math.min(circleSteps.length - 1, currentCircle + 1);
          steps[currentStep].style.display = "flex";
          if (circleSteps[currentCircle]) {
            circleSteps[currentCircle].classList.add("active");
          }
        }/**else {
          // Set custom validity directly on the input element
          showError("Please fill out all required fields before proceeding.");
        }**/
      }/** else {
        showError("Please fill out all required fields before proceeding.");
      }**/
    });
  }
});

function showError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement) {
    if (input.validity.valueMissing) {
      errorElement.textContent = `You need to enter a ${input.name}.It is required.`;
      
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = `Entered value needs to be an email address.`;
    } else if (input.validity.tooShort) {
      errorElement.textContent = `Email should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
    }else {
  errorElement.textContent = ""; // Clear the error message
  errorElement.className = "error"; // Remove the 'active' class
}

    // Set the styling appropriately
    errorElement.className="error active";
    
    
      
    
  }
}
// Add an input event listener to each input field
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    // Clear the error message when the user starts typing
    const errorElement = input.nextElementSibling;
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.className = "error"; // Remove the 'active' class
    }
  });
});


