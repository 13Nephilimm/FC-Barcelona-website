console.log("Hello world!");
const myName = "I'm Nephilim"
console.log(myName)


// Copyright
const year = document.querySelector(".year");
const currentYear = new Date() .getFullYear();
year.textContent = currentYear;

// Mobile Navigation
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNav.addEventListener("click", function() {
    header.classList.toggle("nav-open");
})
