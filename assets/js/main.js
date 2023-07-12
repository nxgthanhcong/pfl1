/*==================== MENU SHOW Y HIDDEN ====================*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navMenu = $('#nav-menu');
const navClose = $('#nav-close');
const navToggle = $('#nav-toggle');
const navLinks = $$('.nav__link');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
})

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
})

/*==================== REMOVE MENU MOBILE ====================*/
navLinks.forEach(element => {
    element.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    })
})

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/ 