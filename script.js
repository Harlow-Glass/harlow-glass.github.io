document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("age-verification");
  const mainContent = document.getElementById("main-content");

  document.getElementById("yes-btn").addEventListener("click", () => {
    modal.style.display = "none";
    mainContent.classList.remove("blurred");
  });

  document.getElementById("no-btn").addEventListener("click", () => {
    window.location.href = "https://www.roblox.com/";
  });

  document.getElementById("muzzer").addEventListener("click", () => {
    window.location.href = "https://buy.stripe.com/3cs182aFd1Xi9gs9AA";
  });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  updateSlide();
}

function updateSlide() {
  const offset = -slideIndex * 100; // Percentage offset for transform
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

setInterval(() => changeSlide(1), 5000);

document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".toggle-icon");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    icon.style.transform = answer.style.display === "block" ? "rotate(45deg)" : "rotate(0deg)";
  });
});
