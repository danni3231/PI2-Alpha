const nav = document.querySelector('.nav-bar');
const btnOffices = nav.querySelector('.nav-bar__item--offices');
const btnHome = nav.querySelector('.nav-bar__item--home');
const btnChat = nav.querySelector('.nav-bar__item--chat');

const modalAmbassador = document.querySelector('.modal--embajador');
btnChat.addEventListener('click',(e)=>{
    e.preventDefault();
    modalAmbassador.classList.replace('close','show');
   // btnChat.querySelector('svg').querySelector('path').style.fill = '#2D2D2D';
   // btnHome.querySelector('svg').querySelector('path').style.fill = '#2D2D2D';
   // btnOffices.querySelector('svg').querySelector('path').style.fill = '#2D2D2D';
});