const onboarding = document.querySelector('.onboarding');
const onboardingImg = onboarding.querySelector('img');
const onboardingH2 = onboarding.querySelector('h2');
const onboardingP = onboarding.querySelector('.description');
const onboardingBTN = onboarding.querySelector('.btn')
const onboardingOmitir = onboarding.querySelector('p');

const onboardingSelectors = onboarding.querySelectorAll('.onboarding__selectors');
var status = 0;

function changeTo1(i) {
    onboardingImg.src = './data/images/onboarding1.svg';
    onboardingH2.innerText = "Maneja tu tiempo";
    onboardingP.innerText = "W A tu lado te mantiene siempre informado sobre el tiempo que empleas en tus asesorías de forma diaria y mensual";
    changeCss(i);
    onboardingBTN.innerHTML = "Siguiente";
    status = i;
}

function changeTo2(i) {
    onboardingImg.src = './data/images/onboardin2.svg';
    onboardingH2.innerText = "Ránking de Embajadores";
    onboardingP.innerText = "El ránking te permite ver tu puntuación respecto a otros embajadores del país. ¡Trata de llegar a ser el N° 1!";
    changeCss(i);
    onboardingBTN.innerHTML = "Siguiente";
    status = i;
}

function changeTo3(i) {
    onboardingImg.src = './data/images/onboarding3.svg';
    onboardingH2.innerText = "Tu perfil";
    onboardingP.innerText = "En tu perfil podrás modificar tu información, los ajustes de la app, ver tu calificación como embajador, ¡y mucho más!";
    changeCss(i);
    onboardingBTN.innerHTML = "Finalizar";
    status = i;
}

function changeCss(i) {
    onboardingSelectors.forEach((element) => {
        element.classList.remove('onboarding__selectors--selected');
    });

    onboardingSelectors[i].classList.add('onboarding__selectors--selected');
};

onboardingSelectors.forEach((element, index) => {

    element.addEventListener('click', () => {

        switch (index) {
            case 0:
                changeTo1(index);
                break;
            case 1:
                changeTo2(index);
                break;
            case 2:
                changeTo3(index);
                break;

            default:
                break;
        }
    });
});

onboardingBTN.addEventListener('click', () => {

    if(status==0){
        changeTo2(1);
    }else if(status==1){
        changeTo3(2);
    }else if(status==2){
        location.href = 'homeEmbajador.html';
    }
});

onboardingOmitir.addEventListener('click', () =>{
    location.href = 'homeEmbajador.html';
});