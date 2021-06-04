const nav = document.querySelector('.nav-bar');
const btnOffices = nav.querySelector('.nav-bar__item--offices');
const btnHome = nav.querySelector('.nav-bar__item--home');
const btnChat = nav.querySelector('.nav-bar__item--chat');

const modalAmbassador = document.querySelector('.modal--embajador');
const modalAmbassadorClose = document.querySelector('.headerCont__icon');

//manage nav

btnChat.addEventListener('click', (e) => {
    e.preventDefault();
    modalAmbassador.classList.replace('close', 'show');

    btnChat.innerHTML = `    
    <svg class="nav-bar__icon" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5158C0 4.98448 4.4205 0 10.521 0C16.485 0 21 4.88983 21 10.4842C21 16.9725 15.708 21 10.5 21C8.778 21 6.867 20.5373 5.334 19.6329C4.7985 19.307 4.347 19.0651 3.7695 19.2544L1.6485 19.8853C1.113 20.0536 0.63 19.6329 0.7875 19.0651L1.491 16.7096C1.6065 16.3836 1.5855 16.0366 1.4175 15.7631C0.5145 14.1017 0 12.2824 0 10.5158ZM9.13495 10.5158C9.13495 11.2624 9.73345 11.8618 10.4789 11.8723C11.2244 11.8723 11.8229 11.2624 11.8229 10.5263C11.8229 9.77967 11.2244 9.18027 10.4789 9.18027C9.74395 9.16975 9.13495 9.77967 9.13495 10.5158ZM13.9755 10.5263C13.9755 11.2624 14.574 11.8723 15.3195 11.8723C16.065 11.8723 16.6635 11.2624 16.6635 10.5263C16.6635 9.77967 16.065 9.18027 15.3195 9.18027C14.574 9.18027 13.9755 9.77967 13.9755 10.5263ZM5.63859 11.8723C4.90359 11.8723 4.29459 11.2624 4.29459 10.5263C4.29459 9.77967 4.89309 9.18027 5.63859 9.18027C6.38409 9.18027 6.98259 9.77967 6.98259 10.5263C6.98259 11.2624 6.38409 11.8618 5.63859 11.8723Z" fill="#2D2D2D"/>
    </svg>

    <p class="nav-bar__label">
        Asistencia
    </p>
    `;

    btnHome.innerHTML = `
    <svg class="nav-bar__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3395 7.65948C21.0095 8.17848 21.4205 8.94948 21.4905 9.78848L21.5005 9.98948V18.0985C21.5005 20.1885 19.8495 21.8885 17.7805 21.9985H15.7905C14.8395 21.9795 14.0705 21.2395 14.0005 20.3095L13.9905 20.1685V17.3095C13.9905 16.9985 13.7595 16.7395 13.4505 16.6885L13.3605 16.6785H10.6895C10.3705 16.6885 10.1105 16.9185 10.0705 17.2185L10.0605 17.3095V20.1595C10.0605 20.2185 10.0495 20.2885 10.0405 20.3385L10.0305 20.3595L10.0195 20.4285C9.90049 21.2795 9.20049 21.9285 8.33049 21.9895L8.20049 21.9985H6.41049C4.32049 21.9985 2.61049 20.3595 2.50049 18.2985V9.98948C2.50949 9.13848 2.88049 8.34848 3.50049 7.79848L9.73049 2.78848C11.0005 1.77948 12.7805 1.73948 14.0895 2.66848L14.2505 2.78848L20.3395 7.65948ZM20.0995 18.2585L20.1105 18.0985V9.99848C20.0995 9.56948 19.9205 9.16848 19.6105 8.86948L19.4805 8.75848L13.3805 3.87848C12.6205 3.26848 11.5405 3.23948 10.7405 3.76848L10.5895 3.87848L4.50949 8.77948C4.16049 9.03848 3.95049 9.42848 3.90049 9.83848L3.88949 9.99848V18.0985C3.88949 19.4285 4.92949 20.5185 6.25049 20.5985H8.20049C8.42049 20.5985 8.61049 20.4495 8.63949 20.2395L8.66049 20.0595L8.67049 20.0085V17.3095C8.67049 16.2395 9.49049 15.3695 10.5405 15.2885H13.3605C14.4295 15.2885 15.2995 16.1095 15.3805 17.1595V20.1685C15.3805 20.3785 15.5305 20.5595 15.7305 20.5985H17.5895C18.9295 20.5985 20.0195 19.5695 20.0995 18.2585Z" fill="#9B9B9B"/>
    </svg>
    
    <p class="nav-bar__label">
        Inicio
    </p>

    `;

    btnOffices.innerHTML = `
    <svg class="nav-bar__icon" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5288 4.99595e-05C3.91977 -0.0156082 0.155096 3.65135 0.00462782 8.24135L0 8.52625C0.0766088 10.7761 0.842073 12.9207 2.19028 14.6876L2.50692 15.1008C3.7938 16.7371 5.32311 18.1733 7.04027 19.3571L7.45372 19.6354L7.51404 19.6828C8.1026 20.1057 8.89726 20.1057 9.48581 19.6828L9.53603 19.6415C10.8986 18.7579 12.155 17.7196 13.2805 16.5473C15.5686 14.1252 16.9477 11.4112 16.9998 8.65498L16.9999 8.55264C17.0155 3.93192 13.3598 0.15567 8.78396 0.00469042L8.5288 4.99595e-05ZM8.52366 1.51747C12.3022 1.53038 15.37 4.54942 15.4839 8.30911L15.4871 8.64061C15.4434 10.9514 14.2334 13.3324 12.1866 15.4991C11.1429 16.5862 9.97274 17.5526 8.70356 18.3745L8.61897 18.438C8.55062 18.4974 8.44923 18.4974 8.38088 18.438L8.29867 18.376C6.40797 17.1416 4.74857 15.583 3.39636 13.7717C2.30718 12.3442 1.66175 10.6374 1.53184 8.85689L1.51275 8.49986C1.52559 4.71221 4.53532 1.63498 8.28345 1.52071L8.52366 1.51747ZM8.49993 5.40129C6.71153 5.40129 5.26176 6.85554 5.26176 8.64946C5.26176 10.4434 6.71153 11.8976 8.49993 11.8976C10.2883 11.8976 11.7381 10.4434 11.7381 8.64946C11.7381 6.85554 10.2883 5.40129 8.49993 5.40129ZM8.49993 6.91871C9.45285 6.91871 10.2253 7.69359 10.2253 8.64946C10.2253 9.60532 9.45285 10.3802 8.49993 10.3802C7.54701 10.3802 6.77451 9.60532 6.77451 8.64946C6.77451 7.69359 7.54701 6.91871 8.49993 6.91871Z" fill="#9B9B9B"/>
    </svg>

    <p class="nav-bar__label">
            Sucursales
    </p>
    `;
});

//close modal

modalAmbassadorClose.addEventListener('click', ()=>{
    modalAmbassador.classList.replace('show', 'close');
    btnChat.innerHTML = `    
    <svg class="nav-bar__icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5609 8.55062e-05C6.87367 -0.0147321 3.44982 1.89719 1.53362 5.03994C-0.382818 8.1831 -0.511473 12.0986 1.19454 15.3604L1.38755 15.7367C1.46134 15.875 1.47557 16.0242 1.43281 16.1621C1.15714 16.8906 0.914931 17.6773 0.721662 18.4766L0.701144 18.6488C0.701144 19.4525 1.12996 20.0047 1.98104 19.9858L2.12276 19.9688C2.89588 19.798 3.65726 19.5781 4.40224 19.3103C4.50099 19.2853 4.66273 19.295 4.8087 19.3547L5.52535 19.7603C5.52697 19.7652 5.52818 19.769 5.53568 19.7734L5.58378 19.7902C9.44259 21.8192 14.1553 21.2595 17.4297 18.3831C20.7046 15.5063 21.8609 10.9095 20.3359 6.8289C18.8111 2.74876 14.9221 0.0321369 10.5609 8.55062e-05ZM10.2559 1.46881L10.5508 1.46419C14.3043 1.49274 17.6514 3.83087 18.9635 7.34179C20.2755 10.8523 19.2807 14.807 16.4628 17.2824L16.2316 17.4787C13.5058 19.7168 9.72115 20.1678 6.54435 18.6339L6.24223 18.4825L6.25518 18.4843L6.23607 18.479L5.79264 18.2246C5.63297 18.1343 5.50631 18.066 5.40422 18.0168C4.91791 17.8163 4.42424 17.7868 3.95993 17.9146L3.52038 18.0656C3.22988 18.1615 2.94393 18.2482 2.65939 18.3266L2.24458 18.435L2.14576 18.821C2.32493 18.08 2.54946 17.3507 2.81811 16.6372C2.99098 16.084 2.93812 15.5299 2.68545 15.0571L2.49548 14.6865C1.02511 11.8752 1.13578 8.50683 2.78458 5.80264C4.38207 3.18259 7.19771 1.5563 10.2559 1.46881ZM4.69834 10.5C4.69834 9.83833 5.23516 9.30238 5.89677 9.30238C6.55838 9.30238 7.0952 9.83833 7.0952 10.5C7.0952 11.1618 6.55838 11.6977 5.89677 11.6977C5.23516 11.6977 4.69834 11.1618 4.69834 10.5ZM9.35704 10.5C9.35704 9.83833 9.89386 9.30238 10.5555 9.30238C11.2171 9.30238 11.7539 9.83833 11.7539 10.5C11.7539 11.1618 11.2171 11.6977 10.5555 11.6977C9.89386 11.6977 9.35704 11.1618 9.35704 10.5ZM15.2143 9.30238C14.5527 9.30238 14.0159 9.83833 14.0159 10.5C14.0159 11.1618 14.5527 11.6977 15.2143 11.6977C15.8759 11.6977 16.4128 11.1618 16.4128 10.5C16.4128 9.83833 15.8759 9.30238 15.2143 9.30238Z" fill="#9B9B9B"/>
    </svg>
    <p class="nav-bar__label">
        Asistencia
    </p>
    `;

    btnHome.innerHTML = `
    <svg class="nav-bar__icon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.99 7.78799C18.92 6.94899 18.509 6.17799 17.839 5.65899L11.75 0.787988L11.589 0.667988C10.28 -0.261012 8.5 -0.221012 7.23 0.787988L1 5.79799C0.38 6.34799 0.009 7.13799 0 7.98899V16.298C0.11 18.359 1.82 19.998 3.91 19.998H5.7L5.83 19.989C6.7 19.928 7.4 19.279 7.519 18.428L7.53 18.359L7.54 18.338C7.549 18.288 7.56 18.218 7.56 18.159V15.309L7.57 15.218C7.61 14.918 7.87 14.688 8.189 14.678H10.86L10.95 14.688C11.259 14.739 11.49 14.998 11.49 15.309V18.168L11.5 18.309C11.57 19.239 12.339 19.979 13.29 19.998H15.28C17.349 19.888 19 18.188 19 16.098V7.98899L18.99 7.78799Z" fill="#2D2D2D"/>
    </svg>
    <p class="nav-bar__label">
        Inicio
    </p>
    `;

    btnOffices.innerHTML = `
    <svg class="nav-bar__icon" width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5288 4.99595e-05C3.91977 -0.0156082 0.155096 3.65135 0.00462782 8.24135L0 8.52625C0.0766088 10.7761 0.842073 12.9207 2.19028 14.6876L2.50692 15.1008C3.7938 16.7371 5.32311 18.1733 7.04027 19.3571L7.45372 19.6354L7.51404 19.6828C8.1026 20.1057 8.89726 20.1057 9.48581 19.6828L9.53603 19.6415C10.8986 18.7579 12.155 17.7196 13.2805 16.5473C15.5686 14.1252 16.9477 11.4112 16.9998 8.65498L16.9999 8.55264C17.0155 3.93192 13.3598 0.15567 8.78396 0.00469042L8.5288 4.99595e-05ZM8.52366 1.51747C12.3022 1.53038 15.37 4.54942 15.4839 8.30911L15.4871 8.64061C15.4434 10.9514 14.2334 13.3324 12.1866 15.4991C11.1429 16.5862 9.97274 17.5526 8.70356 18.3745L8.61897 18.438C8.55062 18.4974 8.44923 18.4974 8.38088 18.438L8.29867 18.376C6.40797 17.1416 4.74857 15.583 3.39636 13.7717C2.30718 12.3442 1.66175 10.6374 1.53184 8.85689L1.51275 8.49986C1.52559 4.71221 4.53532 1.63498 8.28345 1.52071L8.52366 1.51747ZM8.49993 5.40129C6.71153 5.40129 5.26176 6.85554 5.26176 8.64946C5.26176 10.4434 6.71153 11.8976 8.49993 11.8976C10.2883 11.8976 11.7381 10.4434 11.7381 8.64946C11.7381 6.85554 10.2883 5.40129 8.49993 5.40129ZM8.49993 6.91871C9.45285 6.91871 10.2253 7.69359 10.2253 8.64946C10.2253 9.60532 9.45285 10.3802 8.49993 10.3802C7.54701 10.3802 6.77451 9.60532 6.77451 8.64946C6.77451 7.69359 7.54701 6.91871 8.49993 6.91871Z" fill="#9B9B9B"/>
    </svg>
    <p class="nav-bar__label">
            Sucursales
    </p>
    `;
});