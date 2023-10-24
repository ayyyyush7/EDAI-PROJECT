function newaccount() {
    console.log('Function called');  // Add this line for debugging

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Store the values in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to loginperfection.html
    window.location.href = 'loginperfection.html';
}
