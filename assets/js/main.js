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
const tabs = $$('.qualification__button');
const tabContents = $$('.qualification__content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        debugger
        const target = $(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification--active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('qualification--active');
        })
        target.classList.add('qualification--active');
        tab.classList.add('qualification--active');
    })
})

/*==================== SERVICES MODAL ====================*/

const modals = $$('.service__modal');
const modalOpenbtns = $$('.service__button');
const modalClosebtns = $$('.service__modal-close');

modalOpenbtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        modals[index].classList.add('modal--active');
    })
})

modalClosebtns.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        modals.forEach(function (modal) {
            modal.classList.remove('modal--active');
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/ 