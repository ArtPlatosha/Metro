// add sticky navbar
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
	header.classList.toggle('sticky', window.scrollY > 0);
});

// activate the hamburger menu and mobile navigation
const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.mobile-nav');

hamb.addEventListener('click', function() {
	this.classList.toggle('active');
	nav.classList.toggle('slide');
});

// scrollReveal effect
const sr = ScrollReveal({
	distance: '85px',
	duration: 2000,
	reset: false,
});

sr.reveal('.hero .desc', { delay: 250, origin: 'bottom' });
sr.reveal('.newsletter .content', { delay: 250, origin: 'bottom' });