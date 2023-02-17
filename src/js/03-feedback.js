import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onTextAreaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onTextAreaInput(e) {
  const saveData = { email: refs.email.value, textarea: refs.textarea.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function storageData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    refs.email.value = data.email;
    refs.textarea.value = data.textarea;
  }
}

storageData();
