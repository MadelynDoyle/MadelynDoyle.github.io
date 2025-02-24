document.addEventListener("DOMContentLoaded", () => {
    const drawStairsBtn = document.getElementById("drawStairs");
    const climbStairsBtn = document.getElementById("climbStairs");
    const stairsContainer = document.getElementById("stairsContainer");

    let stickFigure;
    let currentStep = 0;
    let climbingInterval;
    let isLeftStep = true;

    drawStairsBtn.addEventListener("click", () => {
        stairsContainer.innerHTML = "";
        stairsContainer.style.display = "block";

        for (let i = 0; i < 10; i++) {
            let stair = document.createElement("div");
            stair.classList.add("stair");
            stairsContainer.appendChild(stair);
        }

        stickFigure = document.createElement("img");
        stickFigure.src = "images/left.jpg"; 
        stickFigure.id = "stickFigure";
        stairsContainer.appendChild(stickFigure);

        currentStep = 0;
        stickFigure.style.bottom = "0px";
        climbStairsBtn.style.display = "block";
    });

    climbStairsBtn.addEventListener("click", () => {
        if (climbingInterval) {
            clearInterval(climbingInterval);
        }

        climbingInterval = setInterval(() => {
            if (currentStep < 10) {
                currentStep++;
                stickFigure.style.bottom = `${currentStep * 30}px`;

                
                stickFigure.src = isLeftStep ? "images/right.jpg" : "images/left.jpg";
                isLeftStep = !isLeftStep;
            } else {
                clearInterval(climbingInterval);
            }
        }, 500);
    });
});
