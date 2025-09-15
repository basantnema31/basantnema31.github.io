var typed = new Typed(".text", {
    strings: ["Coder", "YouTuber", "Video/Audio Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

let currentSlide = 0;
const slides = document.querySelectorAll('.certificates .slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);