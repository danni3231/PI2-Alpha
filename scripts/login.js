const loginMain = document.querySelector('.login__main');
const loginForm = loginMain.querySelector('.login__form');

var typeUser = localStorage.getItem('typeUser');
console.log(typeUser);

if(typeUser === 'ambassador'){
    loginMain.style.background= "$primary";
}