function login() {
  // Retrieve the values from localStorage
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  // Perform some basic validation (you should do more in a real application)
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      window.location.href = 'website.html';
  } else {
      alert('Invalid username or password. Please try again.');
  }
}

function loginWithGoogle() {
  alert('Simulating Google login. Redirecting to website.html...');
  window.location.href = 'website.html';
}

function redirectToCreateAccount() {
  window.location.href = 'create_account.html';
}

function togglePassword() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.getElementById("eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.className = "fa fa-eye";
  } else {
    passwordInput.type = "password";
    eyeIcon.className = "fa fa-eye-slash";
  }
}
