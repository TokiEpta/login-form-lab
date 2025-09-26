import SuccessReg from './alfabet/success-reg.js';

const form = document.querySelector('form');
const name = document.querySelector('#name');
const successReg = new SuccessReg();

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    successReg.writeName(name.value);
});


