const btnBack = document.querySelector('.back');

btnBack.addEventListener('click', ()=>{
    window.history.go(-1);
});

const link = document.querySelector('.notification__request__link');

const modalNoti = document.querySelector('.modal--noti');
const closeModal = document.querySelector('.closeModal');

closeModal.addEventListener('click', ()=>{
    modalNoti.classList.replace('show','close');
});

link.addEventListener('click', ()=>{
    modalNoti.classList.replace('close','show');
})

