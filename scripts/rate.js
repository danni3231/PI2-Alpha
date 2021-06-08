const modalRate = document.querySelector('.modal--qualification');
const btnModalRateClose = document.querySelector('.modal--qualification__close')
const rateStar = document.querySelector('.rateStar');
const rate = rateStar.querySelector('.rateStar__rate');
const rateExtra = rateStar.querySelector('.rateStar__extra');

const modalFinish = document.querySelector('.modal--finished');
const modalFinishClose = document.querySelector('.modal--finished__close');
const btnModalFinish = modalFinish.querySelector('.btn');

console.log(modalFinish);

btnEndChat.addEventListener('click', () => {
    modalRate.classList.replace('close', 'show');
});

rate.addEventListener('click', (e) => {
    //e.preventDefault();
    modalRate.classList.add('modal--qualification--expand');
    rateExtra.classList.replace('close', 'show');
});

rateStar.addEventListener('submit', (e) => {
    e.preventDefault();
    modalRate.classList.replace('show', 'close');
    modalRate.classList.remove('modal--qualification--expand');
    rateExtra.classList.replace('show', 'close');
    modalFinish.classList.replace('close','show');

    rateStar.radio1.checked = false;
    rateStar.radio2.checked = false;
    rateStar.radio3.checked = false;
    rateStar.radio4.checked = false;
    rateStar.radio5.checked = false;
})

btnModalRateClose.addEventListener('click', () => {
    modalRate.classList.replace('show', 'close');
    modalRate.classList.remove('modal--qualification--expand');
    rateExtra.classList.replace('show', 'close');
    modalFinish.classList.replace('close','show');

    rateStar.radio1.checked = false;
    rateStar.radio2.checked = false;
    rateStar.radio3.checked = false;
    rateStar.radio4.checked = false;
    rateStar.radio5.checked = false;
});

modalFinishClose.addEventListener('click',()=>{
    modalFinish.classList.replace('show','close');

    if (location.pathname == '/homeUser.html') {
        changeStatusHome();
    }

    if (location.pathname == '/sucursales.html') {
        changeStatusOffices();
    }
});

btnModalFinish.addEventListener('click',()=>{
    modalFinish.classList.replace('show','close');

    if (location.pathname == '/homeUser.html') {
        changeStatusHome();
    }

    if (location.pathname == '/sucursales.html') {
        changeStatusOffices();
    }
});
/*
if (navigator.geolocation) {
    var success = function (position) {
        var latitud = position.coords.latitude,
            longitud = position.coords.longitude;

            console.log(latitud, longitud);

            var geocoding ='https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitud + ',' + longitud + '&sensor=false';
            console.log(geocoding);
   
    }
    navigator.geolocation.getCurrentPosition(success, function (msg) {
        console.error(msg);
    });
}
*/


