document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user's name from local storage
    const storedData = localStorage.getItem('userData');
    const userData = storedData && JSON.parse(storedData);    
    // Set the welcome message
    if (userData) {
        document.getElementById('welcomeUser').textContent = `Welcome ${userData.name}`;
    }

    // Handle logout
    document.getElementById('logout').addEventListener('click', function () {
        window.location.href = 'index.html'; // Redirect to home page after logout
    });
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})