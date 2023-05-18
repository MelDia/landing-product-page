// SHOW SIDEBAR
const navMenu = document.getElementById('nav-menu');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

if(navOpen) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navOpen.style.display = 'none';
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOpen.style.display = 'block';
    })
}

// FILTER
var mixerProducts = mixitup('.controller-content', {
    selectors: {
        target: '.controller-card'
    },
    animation: {
        duration: 300
    }
});

/* Default */ 
mixerProducts.filter('.purple')

/* Active */ 
const linkProducts = document.querySelectorAll('.controller-item')

function activeProducts() {
    linkProducts.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(l=> l.addEventListener('click', activeProducts))

// CHANGE BG HEADER
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)