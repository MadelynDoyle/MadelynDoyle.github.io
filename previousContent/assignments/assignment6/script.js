//show hide section
const showButton = document.getElementById('show-button');
const hideButton = document.getElementById('hide-button');
const imageToToggle = document.getElementById('image-to-toggle');

showButton.addEventListener('click', () => {
    imageToToggle.style.display = 'block';
});

hideButton.addEventListener('click', () => {
    imageToToggle.style.display = 'none';
});
//animation section
const animateButton = document.getElementById('animate-button');
const heartAnimation = document.getElementById('heart-animation');

animateButton.addEventListener('click', () => {
    heartAnimation.classList.add('animating'); // Add the "animating" class to start the animation
});
//Input section
const addCommentButton = document.getElementById('add-comment-button');
const commentList = document.getElementById('comment-list');

addCommentButton.addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const commentText = document.getElementById('comment-text').value;
    const rating = document.getElementById('rating').value;
    const username = document.getElementById('username').value;

    
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');

    
    const commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    
    commentContent.innerHTML = `
        <strong>Product Name:</strong> ${productName}<br>
        <strong>Comment:</strong> ${commentText}<br>
        <strong>Rating:</strong> ${rating}<br>
        <strong>Username:</strong> ${username}
    `;

    
    commentBox.appendChild(commentContent);

    
    commentList.appendChild(commentBox);

    // Clear the input fields
    document.getElementById('product-name').value = '';
    document.getElementById('comment-text').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('username').value = '';
});