var password = document.getElementById("pwd");
var confirmPassword = document.getElementById("pwd_confirm");

function validatePassword(){
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords do not match.")
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
