const header = document.querySelector('.header');
const menuList = document.querySelector('.nav__ul');
const links = document.querySelectorAll('.nav__a');
const menuHamburger = document.querySelector('.nav__button');
const firstLine = document.querySelector('.nav__div--first');
const secondLine = document.querySelector('.nav__div--second');
const thirdLine = document.querySelector('.nav__div--third');

menuHamburger.addEventListener('click', () => {
    firstLine.classList.toggle('activenav__div--first');
    secondLine.classList.toggle('activenav__div--second');
    thirdLine.classList.toggle('activenav__div--third');
    menuList.classList.toggle('nav__ul--show');
});

links.forEach((links) => {
    links.addEventListener('click', () => {
        firstLine.classList.remove('activenav__div--first');
        secondLine.classList.remove('activenav__div--second');
        thirdLine.classList.remove('activenav__div--third');
        menuList.classList.remove('nav__ul--show');
    })
})

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})