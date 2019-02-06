

const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference. 
    menu.classList.toggle('nav--open');
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.nav-container');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.nav-btn');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
