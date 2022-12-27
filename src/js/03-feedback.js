import throttle from 'lodash.throttle';
import localStorageService from './localStorageService';
const throttle = require('lodash.throttle');

const feedbackFormRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const TO_STORAGE_OBJECT = {};

storageValueToInput();
feedbackFormRef.addEventListener(
  'input',
  throttle(event => {
    if (event.target.name === 'email') {
      TO_STORAGE_OBJECT.email = event.target.value;
    } else {
      TO_STORAGE_OBJECT.message = event.target.value;
    }
    localStorageService.save(STORAGE_KEY, TO_STORAGE_OBJECT);
  })
);

function storageValueToInput() {
  const storageData = localStorageService.load(STORAGE_KEY);
  if (
    localStorage.length > 0 &&
    Object.keys(localStorage).includes(STORAGE_KEY)
  ) {
    const storageData = localStorageService.load(STORAGE_KEY);
    feedbackFormRef.elements.email.value =
      localStorageService.load(STORAGE_KEY).email;
    feedbackFormRef.elements.message.value =
      localStorageService.load(STORAGE_KEY).message;
  }
}

feedbackFormRef.addEventListener('submit', event => {
  event.preventDefault();
  if (
    feedbackFormRef.elements.email.value !== '' &&
    feedbackFormRef.elements.message.value !== ''
  ) {
    console.log(localStorageService.load(STORAGE_KEY));
    feedbackFormRef.elements.email.value = '';
    feedbackFormRef.elements.message.value = '';
    localStorageService.remove(STORAGE_KEY);
  } else {
    alert('Заполните все поля');
  }
});

// console.log(Object.keys(localStorage).includes(STORAGE_KEY));
