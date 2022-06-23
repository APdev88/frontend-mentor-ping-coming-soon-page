const alertEl = document.querySelector(".ping__alert");

function validate() {
  const email = document.getElementById("ping__email");

  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(email)) {
    setTimeout(function () {
      alertEl.innerHTML = "";
    }, 3000);
  } else {
    email.style.border = "1px solid red";
    alertEl.innerHTML = "Please provide a valid email";
    setTimeout(function () {
      alertEl.innerHTML = "";
      email.style.border = "1px solid #c2d3ff";
    }, 3000);
  }
}
