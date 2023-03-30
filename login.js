//Needed Global const for the page to function properly. - Taitt
const loginButton = document.getElementById("login-submit");
const login = document.getElementById("login"); 
var loginErrorMsg = "Invalid Credentials. Try Again.";

//Login Button Function, for now checks if their user and pass is admin then allows login.
//
loginButton.onclick = function(){
    let user = login.elements.item(0).value;
    let pass = login.elements.item(1).value;
    //document.getElementById("login").elements.item(0).value;

    //Added for testing purposes.
    console.log("Username is: " + user);
    console.log("Password is: " + pass);

    if (user == "admin" && pass == "admin") {
        alert("You have successfully logged in.");
        //location.reload();
    } else {
        alert(loginErrorMsg);
    }
}
