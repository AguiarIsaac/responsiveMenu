const btn_menu = document.getElementById('btn_menu')
const nav = document.getElementById('nav')

function teste() {
	if(nav.style.display === 'block') {
		nav.style.display = 'none'
	} else {
		nav.style.display = 'block'
	}
}


btn_menu.addEventListener('click', teste)