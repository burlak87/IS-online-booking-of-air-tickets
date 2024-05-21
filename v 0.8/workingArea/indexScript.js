// let departurePoint = ["Шереметьево(Москва)", "Пулково(Санкт-Петербург)",
//  "Домодедово(Москва)", "Сочи", "Толмачево(Новосибирск)", "Кольцово(Казань)", 
// "Казань", "Уфа", "Храброво(Калининград)", "Емельяново(Красноярск)"]
// let destination = ["Дубай", "Ереван"]


let cardButton = [...document.getElementsByClassName('moreDetailed')];
cardButton.forEach(function (element) {
    element.addEventListener("click", (event) => {
        let arrivingCard = event.target.parentElement;
        let infoRoute = arrivingCard.lastElementChild;
        infoRoute.style.display = "block";
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
let titleForm = document.getElementById('titleForm');
let titleArray = ['Регистрация', 'Авторизация'];
let errText = null;
let error = null;

const signInBtn = document.querySelector('.signinbtn');
const signUpBtn = document.querySelector('.signupbtn');
const formBox = document.querySelector('.form-box');

signUpBtn.addEventListener('click', function (event) {
    formBox.classList.add('active');
    titleForm.innerText = titleArray[0];
    event.preventDefault();
    let login = document.getElementById('login');
    let email = document.getElementById('email');
    let passwordOne = document.getElementById('passwordOne');
    let passwordTwo = document.getElementById('passwordTwo');
    if(passwordOne === passwordTwo) {
        err();
    } else {
        return errText = `Ошибка: поле "${passwordOne.placeholder}" и "${passwordTwo.placeholder}" поле не равны`;
    }
    // вслучае коректной работы всего выше
    if (error === false) {
        errText = "Регистрация произведена успешно"
        document.getElementById('loginErrorEmpty').style.background = "green"
        document.getElementById('loginErrorEmpty').textContent = errText
        document.getElementById('loginErrorEmpty').toggleAttribute("open")
        // поле отображения успешной регистрации закрывается через время
        setTimeout(() => {
            document.getElementById('loginErrorEmpty').removeAttribute("open"); 
            document.getElementById('loginErrorEmpty').style.background = "darkred"
        }, 2000)
    } else {
        // иная ситуация завершения кода
        return
    }
});

signInBtn.addEventListener('click', function (event) {
    formBox.classList.remove('active');
    titleForm.innerText = titleArray[1];
    event.preventDefault();
});

    // Функция проверки длины и заполненности полей 
    // При несоответсвии выводит ошибку через errText
    // В ином случае error = folse  
    function err() {
        if (login.value.length === 0) {
            return errText = `Ошибка: поле "${login.placeholder}" не заполнено`
        } else if (login.value.length < 4) {
            return errText = `Ошибка: поле "${login.placeholder}" меньше 4 символов`
        } else if (password.value.length === 0) {
            return errText = `Ошибка: поле "${passwordOne.placeholder}" не заполнено`
        } else if (password.value.length < 6) {
            return errText = `Ошибка: поле "${passwordOne.placeholder}" меньше 6 символов`
        } else if (password.value.length === 0) {
            return errText = `Ошибка: поле "${passwordTwo.placeholder}" не заполнено`
        } else if (password.value.length < 6) {
            return errText = `Ошибка: поле "${passwordTwo.placeholder}" меньше 6 символов`
        } else if (email.value.length === 0) {
            return errText = `Ошибка: поле "${email.placeholder}" не заполнено`
        } else if (email.value.length < 8) {
            return errText = `Ошибка: поле "${email.placeholder}" меньше 8 символов`
        } else if (numberPhone.value.length === 0) {
            return errText = `Ошибка: поле "${numberPhone.placeholder}" не заполнено`
        } else if (numberPhone.value.length < 10) {
            return errText = `Ошибка: поле "${numberPhone.placeholder}" меньше 10 символов`
        } else {
            error = false
        }
    }   