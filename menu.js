const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	nav.classList.toggle('open');
});

// Close menu when a nav link is clicked
nav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		nav.classList.remove('open');
	});
});
