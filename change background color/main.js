//Choose a random color
/* const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
} */

/* const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "orange", "green", "violet", "yellow", "pink"];

body.style.backgroundColor = "red";
button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(){
    const colIndex = Math.floor(Math.random()*color.length)
    body.style.backgroundColor = color[colIndex]
} */

const button = document.querySelector('button')
const body = document.querySelector('body')
colors = ["red", "orange", "green", "violet", "yellow", "pink"];

body.style.backgroundColor = 'red';
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colIn = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colIn]
}