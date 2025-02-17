function toggleMenu() {
    const menu = document.querySelector(".menu");
    const arrow = document.querySelector(".arrow");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        arrow.innerHTML = "▼";
    } else {
        menu.style.display = "block";
        arrow.innerHTML = "▲";
    }
}

function showExercise(exerciseNumber) {
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.add("hidden");

    if (exerciseNumber === 1) {
        document.getElementById("exercise1").classList.remove("hidden");
    } else {
        document.getElementById("exercise2").classList.remove("hidden");
    }
}

function updateTransportImage() {
    const transportInput = document.getElementById("transportInput").value.toLowerCase();
    const container = document.getElementById("transportImageContainer");
    container.innerHTML = ""; // Clear previous images

    const images = {
        "bike": "images/bike.jpg",
        "scooter": "images/scooter.jpg",
        "car": "images/car.jpg",
        "skateboard": "images/skateboard.jpg"
    };

    if (images[transportInput]) {
        const img = document.createElement("img");
        img.src = images[transportInput];
        container.appendChild(img);
    }
}

function changeHeartColor(color) {
    document.getElementById("heart").style.backgroundColor = color;
}