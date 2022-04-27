// const dotenvParseVariables = require('dotenv-parse-variables');

// const env = dotenvParseVariables(process.env);
// console.log(env);
import { authWithPopup } from './service';

const ref = {
  btnSignIn: document.querySelector('.js-btn-login'),
};

ref.btnSignIn.addEventListener('click', init);

function init(e) {
  authWithPopup();
}
