//hello section
const helloOutput = document.getElementById("hello-output");
const addHello = () => {
    helloOutput.innerHTML += "Hello!<br>";
};

//color section
const colorPicker = document.getElementById("colorPicker");
const star = document.querySelector(".star");
colorPicker.addEventListener("input", (event) => {
    star.style.color = event.target.value;
});

//image section
const image = document.getElementById("changeImage");
const imagePaths = ["images/img1.jpg", "images/img2.jpg"];
let imageIndex = 0;
image.addEventListener("click", () => {
    imageIndex = (imageIndex + 1) % imagePaths.length;
    image.src = imagePaths[imageIndex];
});