const form = document.querySelector("form.login-form");

form.addEventListener("submit", onForm);

function onForm(event) {
  event.preventDefault();

  let formElements = event.currentTarget.elements;
  let login = formElements.email.value;
  let password = formElements.password.value;

  if (!login || !password) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formData = { login, password };
    console.log(formData);
    event.currentTarget.reset();
  }
}
