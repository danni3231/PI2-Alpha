const loginMain = document.querySelector('.login__main');
const loginForm = loginMain.querySelector('.login__form');

var typeUser = localStorage.getItem('typeUser');
console.log(typeUser);

if(typeUser === 'ambassador'){
    loginMain.querySelector('h2').innerText ="¡Bienvenido embajador!"
    loginMain.querySelector('p').innerText ="Por favor ingresa tus datos"
    loginMain.querySelector('a').innerText ="¿Has olvidado tu contraseña?"
    loginMain.classList.add('login__main--ambassador');
    loginMain.querySelector('button').classList.add('btn--secondary');
}

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(typeUser === 'ambassador'){
        location.href='homeEmbajador.html';
    }else{
        location.href='homeUser.html';
    }

});