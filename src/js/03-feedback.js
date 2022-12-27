import throttle from 'lodash.throttle';
import localStorageService from './localStorageService';
const throttle = require('lodash.throttle');

const feedbackFormRef = document.querySelector('.feedback-form');
const STORAGE_KEY = `feedback-form-state`;
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
  if (localStorage.length > 0) {
    feedbackFormRef.elements.email.value =
      localStorageService.load(STORAGE_KEY).email;
    feedbackFormRef.elements.message.value =
      localStorageService.load(STORAGE_KEY).message;
  }
}

feedbackFormRef.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorageService.load(STORAGE_KEY));
  feedbackFormRef.elements.email.value = '';
  feedbackFormRef.elements.message.value = '';
  localStorageService.remove(STORAGE_KEY);
});
