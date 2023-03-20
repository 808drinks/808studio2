const menu = document.querySelector(".nav-mobile-menu")
const menuMenu = document.querySelector(".right-menu")

menu.addEventListener('click', function() {
    menuMenu.classList.toggle('toggle-menu');
    console.log('test');
});


