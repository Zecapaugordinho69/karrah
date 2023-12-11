function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "pessoa@gmail.com" && password === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
}
