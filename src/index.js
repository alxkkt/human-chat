// const dotenvParseVariables = require('dotenv-parse-variables');

// const env = dotenvParseVariables(process.env);
// console.log(env);
import { authWithPopup, onClickSignOut } from './service';
import { btnSignIn, btnSignOut, textWindow } from './js/refs';

btnSignIn.addEventListener('click', authWithPopup);
btnSignOut.addEventListener('click', onClickSignOut);

function hiddenToggle(ref, flag = true) {
  ref.hidden = flag;
}

function authAccess(user) {
  hiddenToggle(btnSignIn);
  hiddenToggle(btnSignOut, false);
  hiddenToggle(textWindow, false);
}

function authDecline() {
  hiddenToggle(btnSignIn, false);
  hiddenToggle(btnSignOut);
  hiddenToggle(textWindow);
}

export { authAccess, authDecline };
