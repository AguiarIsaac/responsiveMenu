const btn_menu = document.querySelector('.icon-menu')
const menu = document.querySelector('.menu')



btn_menu.addEventListener('click', () => {
	menu.classList.toggle("active")
})