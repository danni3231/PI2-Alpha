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
