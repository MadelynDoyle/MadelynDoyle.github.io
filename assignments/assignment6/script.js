const showButton = document.getElementById('show-button');
const hideButton = document.getElementById('hide-button');
const imageToToggle = document.getElementById('image-to-toggle');

showButton.addEventListener('click', () => {
    imageToToggle.style.display = 'block'; // Show the image
});

hideButton.addEventListener('click', () => {
    imageToToggle.style.display = 'none'; // Hide the image
});

const animateButton = document.getElementById('animate-button');
const heartAnimation = document.getElementById('heart-animation');

animateButton.addEventListener('click', () => {
    heartAnimation.classList.add('animating'); // Add the "animating" class to start the animation
});