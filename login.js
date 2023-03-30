const login = document.getElementById("login"); 
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error-message");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login.username.value;
    const password = login.password.value;

    if (username === 'a' && password === 'b') {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
