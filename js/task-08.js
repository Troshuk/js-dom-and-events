const loginFromElement = document.querySelector("form.login-form");

function loginFormHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email.length || !password.length) {
    return alert("All fields must be filled in");
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  form.reset();
}

loginFromElement.addEventListener("submit", loginFormHandler);
