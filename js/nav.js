const menuBtn = document.querySelector('.menu-button');
const linksMenu = document.querySelectorAll('nav a');

menuBtn.addEventListener('click', _ => {
    document.body.classList.toggle('nav-is-open')
});

linksMenu.forEach(link => { 
    link.addEventListener('click', _ => {
        document.body.classList.remove('nav-is-open');
    })
})


