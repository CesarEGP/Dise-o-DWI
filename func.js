/* para el menu desplegable */
const btnShow = document.getElementById('show');
const menu = document.getElementById('scroll');

let menuVisible = false; // Variable de estado para rastrear la visibilidad del menú

/* para redirecionar nosotros */

const about = document.getElementById('about');
const footer = document.getElementById('footer');




/* si se presiona el botón entonces... */
btnShow.addEventListener('click', () => {       
    if (menuVisible) {
        // Si el menú está visible, ocultarlo
        menu.style.display = 'none';
        menuVisible = false;
    } else {
        // Si el menú está oculto, mostrarlo
        menu.style.display = 'flex';
        menu.style.position = 'absolute';
        menu.style.flexDirection = 'column';
        menu.style.zIndex = '1';
        menu.style.backgroundColor = 'rgb(23 23 23)';    
        menu.style.width = '100vw';
        menu.style.height = '40vh';
        menu.style.top = '7.9vh';        
        menuVisible = true;
    }
},


about.addEventListener('click', () => {
    // Utilizar smooth scrolling para hacer scroll hacia el pie de página
    footer.scrollIntoView({ behavior: 'smooth' });
})

);


/* script form */
const $btnSignIn= document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),  
    $signUp = document.querySelector('.sign-up'),
    $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});