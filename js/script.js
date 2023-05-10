// activate the hamburger menu and mobile navigation
const hamb = document.querySelector('.hamb');

hamb.addEventListener('click', function() {
	this.classList.toggle('active');
});