const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

function toggleMenu() {
  document.querySelector('.nav__items').classList.toggle('active');
}


// document.addEventListener("DOMContentLoaded", function () {
//   const skillsContainer = document.querySelector(".skills-container");

//   function autoSlide() {
//       const firstCard = skillsContainer.firstElementChild;
//       skillsContainer.style.transition = "transform 0.2s ease-in-out";
//       skillsContainer.style.transform = "translateX(-160px)";
//       setTimeout(() => {
//           skillsContainer.style.transition = "none";
//           skillsContainer.style.transform = "translateX(0)";
//           skillsContainer.appendChild(firstCard); 
//       }, 100); 
//   }

//   setInterval(autoSlide, 5000);
// });