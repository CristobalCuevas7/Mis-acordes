const nav = document.querySelector('#nav')
const btMenu = document.querySelector('#bt-menu')


btMenu.addEventListener("click", function() {
    nav.classList.toggle("show")
})