const splashPage = document.querySelector('.splashPage');
const clientBtn = splashPage.querySelector('.btn--secondary');
const ambassadorBtn = splashPage.querySelector('.btn--primary');

ambassadorBtn.addEventListener('click', ()=>{
    localStorage.setItem('typeUser', 'ambassador');
    location.href='login.html';
});

clientBtn.addEventListener('click', ()=>{
    localStorage.setItem('typeUser', 'client');
    location.href='login.html';
});
