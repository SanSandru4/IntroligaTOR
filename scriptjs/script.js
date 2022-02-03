const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})