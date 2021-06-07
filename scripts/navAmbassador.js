const navAmbassador = document.querySelector('.navBarEmbajador');
const btnActivity = navAmbassador.querySelector('.navBarEmbajador--activity');
const btnChat = navAmbassador.querySelector('.navBarEmbajador--chat');
const btnEdu = navAmbassador.querySelector('.navBarEmbajador--edu');
const btnProfile = navAmbassador.querySelector('.navBarEmbajador--profile');

const btnNoti = document.querySelector('.profileIcons--noti')

btnActivity.addEventListener('click', (e)=>{
    e.preventDefault();
    location.href = "homeEmbajador.html"
});

btnEdu.addEventListener('click', (e)=>{
    e.preventDefault();
    location.href = "educacion.html"
});

btnProfile.addEventListener('click', (e)=>{
    e.preventDefault();
    location.href = "perfilEmbajador.html"
});

if(btnNoti){
    btnNoti.addEventListener('click', (e)=>{
        e.preventDefault();
        location.href = "notifications.html"
    });
    
}

const modalAmb = document.querySelector('.modal--embajador');
const modalAmbClose = document.querySelector('.headerCont__icon');
const modalAmbChat = document.querySelector('.modal--embajador__chat');

const modalChat = document.querySelector('.modal--chat');
const modalChatPhone = document.querySelector('.userChat__phone');
const modalChatClose = document.querySelector('.userChat__close');

const modalCall = document.querySelector('.modal--call');
const modalCallClose = document.querySelector('.userChat__close--call');
const endCall = document.querySelector('.btn--closeCall');

const btnOp = document.querySelector('.userChat__menuDots');
const modalOp = document.querySelector('.modal--options');
const btnEndChat = document.querySelector('.modal--options__end');


btnChat.addEventListener('click', ()=>{
    modalAmb.classList.replace('close', 'show');
});

modalAmbClose.addEventListener('click', () => {
    modalAmb.classList.replace('show', 'close');
 
});

modalAmbChat.addEventListener('click', () => {
    modalAmb.classList.replace('show', 'close');
    modalChat.classList.replace('close', 'show');
});


modalChatClose.addEventListener('click', () => {
    modalChat.classList.replace('show', 'close');
    if (location.pathname == '/homeUser.html') {
        changeStatusHome();
    }

    if (location.pathname == '/sucursales.html') {
        changeStatusOffices();
    }
});

modalChatPhone.addEventListener('click', () => {
    modalChat.classList.replace('show', 'close');
    modalCall.classList.replace('close', 'show');
});

modalCallClose.addEventListener('click', () => {
    modalCall.classList.replace('show', 'close');
});

endCall.addEventListener('click', (e) => {
    e.preventDefault();
    modalCall.classList.replace('show', 'close');
    modalChat.classList.replace('close', 'show');
});

btnOp.addEventListener('click', () => {
    modalOp.classList.replace('close', 'show');
});

btnEndChat.addEventListener('click', ()=>{
    modalChat.classList.replace('show', 'close');
});

document.addEventListener('click', (e) => {

    if( e.target != modalOp && e.target !=btnOp){
        modalOp.classList.replace('show', 'close');
   
    }
  
});
