//Needed Globals for the page to function properly. - Taitt
const loginButton = document.getElementById("login-submit");
const login = document.getElementById("login"); 
var loginErrorMsg = "Invalid Credentials. Try Again.";

//Login Button Function, for now checks if their user and pass is admin then allows login. - Taitt
loginButton.onclick = function(){
    //Pick up work here again some time later, Data needs hidden & redirection to gameSelect needs fixed. - Taitt
    let userInput = login.elements.item(0).value;
    let passInput = login.elements.item(1).value;

    //document.getElementById("login").elements.item(0).value; Template to follow - Taitt

    setcookie(userInput, passInput);

    //Added for testing purposes. - Taitt
    console.log("Username is: " + getCookie("username"));
    console.log("Password is: " + getCookie("password"));

    //Read from the database file here to see if their username and password are in the database - Taitt
    if (user == "admin" && pass == "admin") {
        alert("You have successfully logged in.");
        
        //Redirect to gameSelect.html - Taitt
        window.location.replace("gameSelect.html");
        return false;
    } else {
        alert(loginErrorMsg);
    }
}

function setcookie(x,y){
    document.cookie = "username=" + x + ";path=/";
    document.cookie = "password=" + y + ";path=/";
}

//The following code was received from W3Schools at this link: https://www.w3schools.com/js/js_cookies.asp - Taitt
//This was needed for full cookie functionality, and the code is subject to fair use as it is a commonly used function for cookies - Taitt
//If unable to use, will remove later - Taitt
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);

    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//Add a separate register function here that writes to the file then logs them in - Taitt