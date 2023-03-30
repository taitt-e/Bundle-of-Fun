//Needed Globals for the page to function properly. - Taitt
const loginButton = document.getElementById("login-submit");
const login = document.getElementById("login"); 
var loginErrorMsg = "Invalid Credentials. Try Again.";

//Login Button Function, for now checks if their user and pass is admin then allows login. - Taitt
loginButton.onclick = function(){
    //Pick up work here again some time later, Data needs hidden & redirection to gameSelect needs fixed. - Taitt
    let user = login.elements.item(0).value;
    let pass = login.elements.item(1).value;

    //document.getElementById("login").elements.item(0).value; Template to follow - Taitt

    //Added for testing purposes. - Taitt
    console.log("Username is: " + user);
    console.log("Password is: " + pass);

    if (user == "admin" && pass == "admin") {
        alert("You have successfully logged in.");
        
        //Redirect to gameSelect.html - Taitt
        //window.location.assign("gameSelect.html");
    } else {
        alert(loginErrorMsg);
    }
}
