let hamburger = document.getElementById("hamburger-icon")
let menu = document.getElementById("hamburger-menu")
let closeMenu = document.getElementById("close-icon")
let container = document.getElementById("container")

hamburger.addEventListener('click', () =>{
    console.log("clicked")
    menu.style.display = "block"
    container.style.display = "none"
})

closeMenu.addEventListener('click', () =>{
    console.log("closed")
    menu.style.display = "none"
    container.style.display = "block"
})