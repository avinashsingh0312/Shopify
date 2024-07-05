document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting via the browser

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored user data from local storage
    const storedData = localStorage.getItem('userData');
    const userData = storedData && JSON.parse(storedData);

    // Check if the entered credentials match the stored credentials
    if (userData && userData.username === username && userData.password === password) {
        alert('Login successful!');
        window.location.href = 'LoggedIn.html';  // Redirect to the home page
    } else {
        alert('Invalid username or password. Please try again!');
    }
});
