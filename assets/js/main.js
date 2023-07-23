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
var swiper2 = new Swiper(".testimonial-swipper", {
    grabCursor: true,
    spaceBetween: 48,
    clickabled: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        568: { slidesPerView: 2 }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = $$(".section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(item => {
        const sectionHeight = item.offsetHeight;
        const sectionTop = item.offsetTop - 50;
        sectionId = item.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            console.log(`.nav__menu a[href*=${sectionId}]`)
            $(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            $(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }

    })
}

window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = $('#header');
    if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/
const themeButton = $('#theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => $('body').classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    $('body').classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', function () {
    $('body').classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})