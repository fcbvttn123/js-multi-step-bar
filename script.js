// DOM Elements

const btns = document.querySelectorAll(".container .btn-box button"),
  steps = document.querySelectorAll(".container .step-box span"),
  indicator = document.querySelector(".container .step-box .indicator .bar"),
  container = document.querySelector(".container"),
  containerWidth = window.getComputedStyle(container).width

// App Flow

let currentStep = 1;
btns[0].disabled = true;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList[0] == "next" ? ++currentStep : --currentStep;
    currentStep = currentStep < 0 ? 0 : currentStep;
    currentStep = currentStep > steps.length ? steps.length : currentStep;
    currentStep == 1 ? (btns[0].disabled = true) : (btns[0].disabled = false);
    e.target.classList[0] == "next"
      ? steps[currentStep - 1].classList.add("active")
      : steps[currentStep].classList.remove("active");
    indicator.style.width = `${(currentStep - 1) / (steps.length - 1) * 100}%`;
  })
});
