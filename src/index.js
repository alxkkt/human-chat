// const dotenvParseVariables = require('dotenv-parse-variables');

// const env = dotenvParseVariables(process.env);
// console.log(env);
import { authWithPopup } from './service';

const ref = {
  btnSingIn: document.querySelector('.js-btn-login'),
};

ref.btnSingIn.addEventListener('click', init);

function init(e) {
  authWithPopup();
}
