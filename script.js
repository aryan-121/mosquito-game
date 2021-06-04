const check = document.getElementById("image");

function winner(_e) {
    document.body.innerHTML = "";
    let imag = document.createElement("img");
    imag.id = "image1";
    imag.setAttribute("src", "won.png");
    body.appendChild(imag);
    imag.style.position = "absolute";
    imag.style.left = "35%";
    imag.style.top = "20%";
    image1.style.width = "60vh";
    image1.style.height = "60vh";
    let tada = document.createElement("audio");
    tada.setAttribute("src", "tada.mp3");
    tada.play();
}

function getRandomInt() {
    return Math.floor(Math.random() * (80 - 10) + 10);
}

const changePos = () => {
    let t = getRandomInt();
    let b = getRandomInt();
    check.style.top = `${t}%`;
    check.style.left = `${b}%`;
}
check.addEventListener("mouseover", changePos);
check.addEventListener("click", winner);