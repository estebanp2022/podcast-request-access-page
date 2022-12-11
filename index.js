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
    error.style.color = "red";
  } else if (email.value.length === 0) {
    error.textContent = "Oops! Please add your email";
    error.style.color = "red";
  } else {
    error.style.color = "#54e6af";
    error.textContent = "Thank you!";
  }
  form.reset();
  setTimeout(clearMessage, 3000);
});
