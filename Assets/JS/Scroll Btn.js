// const scrollBtn = document.getElementById("scrollToTopBtn");

// // Always hidden on load
// scrollBtn.style.display = "none";
// scrollBtn.style.opacity = 0;
// scrollBtn.style.transition = "opacity 0.4s ease";

// // Flag to allow showing only after user scrolls
// let userHasScrolled = false;

// function checkScroll() {
//   if (!userHasScrolled) return; // block button until first scroll

//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     scrollBtn.style.display = "block";
//     setTimeout(() => { scrollBtn.style.opacity = 1; }, 10);
//   } else {
//     scrollBtn.style.opacity = 0;
//     setTimeout(() => {
//       if (scrollBtn.style.opacity == 0) {
//         scrollBtn.style.display = "none";
//       }
//     }, 400);
//   }
// }

// // Detect first scroll → enable the button logic
// window.addEventListener("scroll", () => {
//   userHasScrolled = true;
//   checkScroll();
// });

