const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document
  .querySelectorAll(".nav__link")
  .forEach((n) => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove('active')
  }));


// Main js code

const buttons = document.querySelectorall('.btn')
const storeItems = document.querySelectorall('.items')

buttons.forEach((button) =>{
  button.addEventListener("click", (e) => {
    e.preventDefault()
    const filter = target.datase.filter

    storeItems
  })
})