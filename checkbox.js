const passwordInput = document.getElementById("password");
const showPassCheckbox = document.getElementById("showpass");

showPassCheckbox.addEventListener("change", () => {
  if (showPassCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
