//Needed Global const for the page to function properly. - Taitt
const loginButton = document.getElementById("login-submit");
const login = document.getElementById("login"); 
var loginErrorMsg = "Invalid Credentials. Try Again.";

//Login Button Function, for now checks if their user and pass is admin then allows login.
//
loginButton.onclick = function(){
    //Added for testing purposes.
    console.log("Username is: " + username);
    console.log("Password is: " + password);

    if (username == "admin" //*/&& password == "admin"*/
    ) {
        alert("You have successfully logged in.");
        //location.reload();
    } else {
        alert(loginErrorMsg);
    }
}
