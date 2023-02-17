// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

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
