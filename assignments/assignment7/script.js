const exercise1Button = document.getElementById('exercise1');
const exercise2Button = document.getElementById('exercise2');
const exercise1Content = document.getElementById('exercise1-content');
const exercise2Content = document.getElementById('exercise2-content');

const name1Input = document.getElementById('name1');
const age1Input = document.getElementById('age1');
const name2Input = document.getElementById('name2');
const age2Input = document.getElementById('age2');
const name3Input = document.getElementById('name3');
const age3Input = document.getElementById('age3');
const compareButton = document.getElementById('compareButton');
const oldestResult = document.getElementById('oldestResult');

const donationAmountInput = document.getElementById('donationAmount');
const updateThermometerButton = document.getElementById('updateThermometer');
const progress = document.getElementById('progress');

exercise1Content.style.display = 'block';
exercise2Content.style.display = 'none';

exercise1Button.addEventListener('click', () => {
    exercise1Content.style.display = 'block';
    exercise2Content.style.display = 'none';
});

exercise2Button.addEventListener('click', () => {
    exercise1Content.style.display = 'none';
    exercise2Content.style.display = 'block';
});
const exerciseButtons = document.querySelectorAll('.exercise-button');
const exerciseContents = document.querySelectorAll('.exercise-content');

exerciseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        exerciseContents.forEach(content => {
            content.style.display = 'none';
        });

        exerciseContents[index].style.display = 'block';
    });
});

compareButton.addEventListener('click', () => {
    const age1 = parseInt(age1Input.value); 
    const age2 = parseInt(age2Input.value);
    const age3 = parseInt(age3Input.value);

    if (!isNaN(age1) && !isNaN(age2) && !isNaN(age3)) {
        if (age1 > age2 && age1 > age3) {
            oldestResult.textContent = `The oldest person is ${name1Input.value}.`;
        } else if (age2 > age1 && age2 > age3) {
            oldestResult.textContent = `The oldest person is ${name2Input.value}.`;
        } else if (age3 > age1 && age3 > age2) {
            oldestResult.textContent = `The oldest person is ${name3Input.value}.`;
        } else {
            oldestResult.textContent = 'There is a tie in ages.';
        }
    } else {
        oldestResult.textContent = 'Please enter valid ages for all three people.';
    }
});

updateThermometerButton.addEventListener('click', () => {
    const donationAmount = parseInt(donationAmountInput.value);

    if (!isNaN(donationAmount)) {
        const goalAmount = 1000; 
        const percentage = (donationAmount / goalAmount) * 100;

        const limitedPercentage = Math.min(percentage, 100);

        progress.style.height = `${limitedPercentage}%`;
    } else {
        alert('Please enter a valid donation amount.');
    }
});
