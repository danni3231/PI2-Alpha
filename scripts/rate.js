const modalRate = document.querySelector('.modal--qualification');
const rateStar = document.querySelector('.rateStar');
const rate = rateStar.querySelector('.rateStar__rate');
const rateExtra = rateStar.querySelector('.rateStar__extra');

console.log(rate);

rate.addEventListener('click', ()=>{
    modalRate.classList.add('modal--qualification--expand');
    rateExtra.style.display = "flex";
});
