const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi, to u mad";
    helloP.classList.add("special");
}
// => is a new function in javascript
window.onload = () => {
    //const clickButton = document.getElementById("button-click");
    //clickButton.onclick = changeText;
        //do this instead of the above because u can do it in one line
    document.getElementById("button-click").onclick = changeText;
}
//this is called an ananoymous function and ypu cannot call a second time it is just tied to an event
//were embracing the syntax of javascript