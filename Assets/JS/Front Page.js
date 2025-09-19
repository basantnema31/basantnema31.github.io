// Skills Effect
var typed = new Typed(".text", {
    strings: ["Coder", "YouTuber", "Video/Audio Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// #home to #portfolio in url
const portfolioLogoLink = document.querySelector('.logo');
const homeSection = document.querySelector('#home');

portfolioLogoLink.addEventListener('click', function(event) {
    event.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, null, '#portfolio');
});


// Hover Sound Effect
const imagesWithSound = document.querySelectorAll('.home img, .about img');
const hoverSound = document.getElementById('hover-sound');

imagesWithSound.forEach(image => {
    image.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});