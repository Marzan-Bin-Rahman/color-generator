let body = document.getElementById('body');
let rgb = document.getElementById('rgb');
let btn = document.getElementById('btn');
let hex = document.getElementById('hex');

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function colorGenerator(){
    let r = getRandomNumber(0,255);
    let g = getRandomNumber(0,255);
    let b = getRandomNumber(0,255);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rgb.innerHTML = `rgb(${r}, ${g}, ${b})`
    hex.innerHTML = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

colorGenerator();
btn.addEventListener("click", colorGenerator);