const openNavBtn = document.querySelector('#open-nav');
const closeNavBtn = document.querySelector('#close-nav');
const backdrop = document.querySelector('#backdrop');
const nav = document.querySelector('#nav-content');
const navLinks = document.querySelectorAll('.nav__link');

const openNavHandler = () => {
	console.log('open nav');
	openNavBtn.setAttribute('aria-expanded', 'true');
	nav.classList.add('nav__content--expanded');
	backdrop.classList.add('nav__shadow--visible')
};

const closeNavHandler = (e) => {
	e.preventDefault();

	console.log('close nav');
	openNavBtn.setAttribute('aria-expanded', 'false');
	nav.classList.remove('nav__content--expanded');
	backdrop.classList.remove('nav__shadow--visible')

};

openNavBtn.addEventListener('click', openNavHandler);
closeNavBtn.addEventListener('click', closeNavHandler);
backdrop.addEventListener('click', closeNavHandler);
navLinks.forEach((navLink) =>
	navLink.addEventListener('click', closeNavHandler)
);
