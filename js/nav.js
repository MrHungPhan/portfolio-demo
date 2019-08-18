const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

menuBtn.addEventListener('click', _ => {   
    containerAll.style.transition = "transform 250ms ease-in-out"
    document.body.classList.toggle('nav-is-open');
});


nav.addEventListener('click', _ => {
    containerAll.style.transition = '0ms'
    document.body.classList.remove('nav-is-open');
})


