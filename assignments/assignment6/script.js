const showButton = document.getElementById('show-button');
const hideButton = document.getElementById('hide-button');
const imageToToggle = document.getElementById('image-to-toggle');

showButton.addEventListener('click', () => {
    imageToToggle.style.display = 'block'; // Show the image
});

hideButton.addEventListener('click', () => {
    imageToToggle.style.display = 'none'; // Hide the image
});