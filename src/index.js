// const dotenvParseVariables = require('dotenv-parse-variables');

// const env = dotenvParseVariables(process.env);
// console.log(env);

import { authWithPopup, onClickSignOut, pushData } from './service';
import { uploadUserFile } from './service/storage-api';
import {
  btnSignIn,
  btnSignOut,
  textWindow,
  btnSend,
  textArea,
  textContainer,
  fileLoad,
} from './js/refs';
import { markup } from './js/markup';

btnSignIn.addEventListener('click', authWithPopup);
btnSignOut.addEventListener('click', onClickSignOut);
btnSend.addEventListener(`click`, getValue);

function hiddenToggle(ref, flag = true) {
  ref.hidden = flag;
}
let userId = null;
let photoURL = null;

function authAccess(user) {
  hiddenToggle(btnSignIn);
  hiddenToggle(btnSignOut, false);
  hiddenToggle(textContainer, false);

  userId = user.uid;
  photoURL = user.photoURL;
}

function authDecline() {
  hiddenToggle(btnSignIn, false);
  hiddenToggle(btnSignOut);
  hiddenToggle(textContainer);
}

function getValue(e) {
  const textValue = textArea.value.trim();
  if (!textValue) {
    return;
  }
  textArea.value = ``;
  pushData(createDataObject(userId, photoURL, textValue));
}

function createDataObject(uid, avatar, message) {
  const date = getTime();
  return { uid, avatar, message, date };
}

function getTime() {
  const newTime = new Date();
  return `${newTime.getHours().toString().padStart(2, '0')}:${newTime
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
}
function viewUpdate(arr) {
  const dataMarkup = markup(arr, userId);
  addMessages(dataMarkup);
}
function addMessages(str = '') {
  textWindow.innerHTML = str;
}

fileLoad.addEventListener('change', addCustomerFile);

function addCustomerFile(e) {
  const file = e.target.files[0];
  uploadUserFile(file);
}

export { authAccess, authDecline, viewUpdate };
