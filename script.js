const selectedRating = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submit");
const mainContainer = document.querySelector(".main-content");
const tyContainer = document.querySelector(".thank-you-card");
const displayRating = document.getElementById("selected-rating");
const errorMsg = document.querySelector(".error");
let selectedRate = 0;

selectedRating.forEach((rating) => {
  rating.addEventListener("click", () => {
    selectedRate = rating.textContent;
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (selectedRate === 0) {
    errorMsg.style.display = "block";
  } else {
    mainContainer.style.display = "none";
    tyContainer.style.display = "block";
    displayRating.innerHTML = selectedRate;
    displayRating.style.margin = "0 2px";
  }
});
