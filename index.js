const email = document.querySelector(".email");
const submitBtn = document.querySelector(".btn");
const error = document.querySelector(".err-message");
const form = document.querySelector(".email-form");

// prevent browser from showing default validation error message
document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
    };
  })(),
  true
);

function clearMessage() {
  error.textContent = "";
}

// custom error message after form is incorrectly submitted
submitBtn.addEventListener("click", function () {
  if (email.validity.typeMismatch) {
    error.textContent = "Oops! Please check your email";
  }
  form.reset();
  setTimeout(clearMessage, 3000);
});
