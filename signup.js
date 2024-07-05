document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting via the browser

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store the data in local storage
    localStorage.setItem('userData', JSON.stringify({name: name, username: username, password: password}));

    // Optionally, redirect the user or clear the form
    alert('Signup successful!');
    window.location.href = 'login.html';  // Redirect to the home page
});
