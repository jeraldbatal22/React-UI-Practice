const menu = document.getElementById('showNavbar').addEventListener('click', showNavbar)
// const navContainer = document.getElementById('navContainer')
let condition = false
function showNavbar() {
  condition = !condition
  if (condition) {
    navbar.style.display = "flex"
  } else {
    navbar.style.display = "none"
  }
}