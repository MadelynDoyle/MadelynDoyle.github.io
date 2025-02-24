document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {title: "Happy Birthday", img: "images/birthday.jpg"},
        {title: "Crazy Clown", img: "images/clown.jpg"},
        {title: "It's Raining", img: "images/rain.jpg"},
        {title: "Quiet Time", img: "images/read.jpg"},
        {title: "Working Hard", img: "images/shovel.jpg"},
        {title: "Work from Home", img: "images/work.jpg"}
    ];

    const titlesContainer = document.getElementById("titles");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("close");

    images.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = item.title;

        div.addEventListener("click", () => {
            popupTitle.textContent = item.title;
            popupImg.src = item.img;
            popup.classList.remove("hidden");
        });

        titlesContainer.appendChild(div);
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
});
