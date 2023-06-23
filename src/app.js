const humburger = document.querySelector('#humburger');
const menu = document.querySelector('#menu');
const hLinks = document.querySelectorAll('#hLink');
const body = document.querySelector('body');
const moon = document.querySelector('#moon');

humburger.addEventListener("click" , () => {
    menu.classList.toggle("hidden");
    humburger.classList.toggle("bg-white");
})
 hLinks.forEach(link => {
    link.addEventListener("click" , () => {
        menu.classList.toggle("hidden");
        humburger.classList.toggle("bg-white");
    })
 })

moon.addEventListener("click" , () => {
    body.classList.toggle("dark");
   
})