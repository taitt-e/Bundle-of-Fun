function validatePassword(form){
	let password = form.pwd.value;
	let confirmPassword = form.pwd_confirm.value;

	if(password.value == ''){
  	    password.setCustomValidity("Please enter password");
    }else if(confirmPassword.value == ''){
        confirmPassword.setCustomValidity("Please confirm your password");
    }else if(password != confirmPassword){
        alert("Passwords do not match! Please try again.");
        return false;
    }else{
        alert("Password Match!");
        return true;
    }
}
