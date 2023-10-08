const quotes = [
    "Neitherfield is let at last - Jane Austen",
    "There is some good in this world, and its worth fighting for. - Tolkien",
    "Beware; for I am fearless, and therefore powerful. - Mary Shelley",
    "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man. - Shakespeare",
    "I am not afraid of storms, for I am learning how to sail my ship. - Louisa May Alcott"
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

function updateQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

updateQuote();

setInterval(updateQuote, 2000);

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "purple"];
const rainbowContainer = document.getElementById("rainbow");
const potOfGold = document.getElementById("pot-of-gold");

document.getElementById("rainbow-button").addEventListener("click", () => {
    // Clear previous rainbow colors
    rainbowContainer.innerHTML = '';

    let delay = 0;

    rainbowColors.forEach(color => {
        setTimeout(() => {
            const paragraph = document.createElement("div"); // Changed from 'p' to 'div'
            paragraph.style.backgroundColor = color;
            rainbowContainer.appendChild(paragraph);
        }, delay);

        delay += 500;
    });

    setTimeout(() => {
        potOfGold.style.display = "block";
    }, delay + 500);
});