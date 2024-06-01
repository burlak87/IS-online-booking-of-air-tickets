/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

let styleMode, styleToggle;
const enableDarkStyle = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('styleMode', 'dark');
};

const disableDarkStyle = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('styleMode', null);
};

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    localStorage.clear();
    styleToggle = document.getElementById('colorMode');
    styleMode = localStorage.getItem('styleMode');
});

test('должен включить темный режим', () => {
    enableDarkStyle();
    expect(document.body.classList.contains('darkmode')).toBe(true);
    expect(localStorage.getItem('styleMode')).toBe('dark');
});

test('должен отключить темный режим', async () => { 
  enableDarkStyle();   
  disableDarkStyle();  

  await new Promise(resolve => setTimeout(resolve, 1000)); 

  expect(document.body.classList.contains('darkmode')).toBe(false);  
  expect(localStorage.getItem('styleMode')).toEqual('null');
});


test('должен переключать темный режим при нажатии кнопки', () => { 
  styleToggle.click(); 
  expect(document.body.classList.contains('darkmode')).toBe(false); 
  expect(localStorage.getItem('styleMode')).toBeNull(); 

  
  setTimeout(() => {
      styleToggle.click(); 
      expect(document.body.classList.contains('darkmode')).toBe(true); 
      expect(localStorage.getItem('styleMode')).toBe('dark'); 
  }, 0);
});

// test('должен показывать подробную информацию при нажатии на кнопку карточки', () => { 
//   let cardButton = [...document.getElementsByClassName('moreDetailed')]; 
//   cardButton[0].click(); 
//   return new Promise(resolve => {
//     setTimeout(() => {
//       let infoRoute = cardButton[0].parentElement.lastElementChild; 
//       expect(infoRoute.style.display).toBe('flex'); 
//       resolve();
//     }, 1000); 
//   });
// });

// test('должен скрывать подробную информацию при нажатии на кнопку закрытия', () => { 
//   let btnClose = [...document.getElementsByClassName('btnClose')]; 
//   btnClose[0].click(); 
//   return new Promise(resolve => {
//     setTimeout(() => {
//       let arrivingCardClose = btnClose[0].parentElement; 
//       expect(arrivingCardClose.style.display).toBe('none'); 
//       resolve();
//     }, 1000); 
//   });
// });

test('должен показывать подробную информацию при нажатии на кнопку карточки', async () => {   
  const cardButton = document.querySelector('.moreDetailed');   
  const infoRoute = cardButton.parentElement.lastElementChild;   
  cardButton.dispatchEvent(new Event('click'));   
  await new Promise(resolve => setTimeout(resolve, 1000)); // Ждем 1 секунду 
  expect(window.getComputedStyle(infoRoute).getPropertyValue('display')).toBe('flex');   
});  
  
test('должен скрывать подробную информацию при нажатии на кнопку закрытия', async () => {   
  const btnClose = document.querySelector('.btnClose');   
  const arrivingCardClose = btnClose.parentElement;   
  btnClose.dispatchEvent(new Event('click'));   
  await new Promise(resolve => setTimeout(resolve, 1000)); // Ждем 1 секунду 
  expect(window.getComputedStyle(arrivingCardClose).getPropertyValue('display')).toBe('none');   
});


test('должен переключаться на форму регистрации', () => {
  const signUpBtn = document.querySelector('.signupbtn');
  signUpBtn.click();
  expect(form.classList.contains('active')).toBe(true);
  expect(btnLink.innerText).toBe(titleArray[0]);
  expect(titleForm.innerText).toBe(titleArray[0]);
});

test('должен переключаться на форму авторизации', () => {
  const signInBtn = document.querySelector('.signinbtn');
  signInBtn.click();
  expect(form.classList.contains('active')).toBe(false);
  expect(btnLink.innerText).toBe(titleArray[1]);
  expect(titleForm.innerText).toBe(titleArray[1]);
});

describe('registration form', () => {
  let form;
  let preventDefaultCalled = false;
  
  beforeEach(() => {
    form = document.createElement('form');

    Event.prototype.preventDefault = jest.fn(() => {
      preventDefaultCalled = true;
    });
  });
  
  test('submission should prevent default form behavior', () => {
    document.body.appendChild(form);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
    });

    const event = new Event('submit', { bubbles: true });
    form.dispatchEvent(event);

    expect(preventDefaultCalled).toBe(true);
  });
});