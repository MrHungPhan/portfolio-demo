const links = document.querySelectorAll('.portfolio-link');
const btnCloses = document.querySelectorAll('.modal-close');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        let modal = e.target.parentNode.nextElementSibling;
        if(modal){
             modal.classList.add('is-open');
             document.body.style.overflowY = 'hidden';
             modal.style.animation = 'modalIn .7s ease-in'
        }
           
    })
})


btnCloses.forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault();

        // this la context cua button close modal
        let modal =  this.parentNode;

        console.log(modal)

        const closeModal = () => {
            modal.classList.remove('is-open');
            document.body.style.overflowY = 'scroll'
            modal.removeEventListener('animationend', closeModal);
        }
        
        modal.style.animation = 'modalOut .7s ease-out';
        modal.addEventListener('animationend', closeModal)

    })
})