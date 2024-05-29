// смена цвета
let styleMode = localStorage.getItem('styleMode');
let styleToggle = document.getElementById('colorMode');

const enableDarkStyle = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('styleMode', 'dark');
};

const disableDarkStyle = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('styleMode', null);
}

styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if(styleMode !== 'dark') {
        enableDarkStyle();
    } else {
        disableDarkStyle();
    }
});

if(styleMode === 'dark') {
    enableDarkStyle();
};

// карточки

let cardButton = [...document.getElementsByClassName('moreDetailed')];
cardButton.forEach(function (element) {
    element.addEventListener("click", (event) => {
        let arrivingCard = event.target.parentElement;
        let infoRoute = arrivingCard.lastElementChild;
        infoRoute.style.display = "flex";
    });
});

let btnClose = [...document.getElementsByClassName('btnClose')];
btnClose.forEach(function (element) {
    element.addEventListener("click", (event) => {
        let arrivingCardClose = event.target.parentElement;
        arrivingCardClose.style.display = "none";
    });
});


// window 
let btnLink = document.getElementById('regAuth');
let titleForm = document.getElementById('titleForm');
let titleArray = ['Регистрация', 'Авторизация'];
let errText = null;
let error = null;

const signInBtn = document.querySelector('.signinbtn');
const signUpBtn = document.querySelector('.signupbtn');
const formBox = document.querySelector('.form-box');

signUpBtn.addEventListener('click', function (event) {
    formBox.classList.add('active');
    btnLink.innerText = titleArray[0];
    titleForm.innerText = titleArray[0];
    event.preventDefault();
});

signInBtn.addEventListener('click', function (event) {
    formBox.classList.remove('active');
    btnLink.innerText = titleArray[1];
    titleForm.innerText = titleArray[1];
    event.preventDefault();
});