//Needed Globals for the page to function properly. - Taitt
const loginButton = document.getElementById("login-submit");
const login = document.getElementById("login"); 
var loginErrorMsg = "Invalid Credentials. Try Again.";
var rememberMe = document.getElementById("rememberMe");

//Login Button Function, for now checks if their user and pass is admin then allows login. - Taitt
loginButton.onclick = function(){
    //Pick up work here again some time later, Data needs hidden & redirection to gameSelect needs fixed. - Taitt
    let userInput = login.elements.item(0).value;
    let passInput = login.elements.item(2).value;
    //document.getElementById("login").elements.item(0).value; Template to follow - Taitt

    //if(rememberMe){
        //setcookie(userInput, passInput);

    //Added for testing purposes. - Taitt
        //let testx = getCookie("username");
        //let testy = getCookie("password");
        //console.log("Username is: " + testx);
        //console.log("Password is: " + testy);
    //}else{
    //    console.log("Failure.");
    //}

    //Read from the database file here to see if their username and password are in the database - Taitt
    if (userInput == "admin" && passInput == "admin") {
    //if (validateUserInDB(user, pass)) {
        alert("You have successfully logged in.");
        
        //Redirect to gameSelect.html - Taitt
        window.location.replace("gameInterface.html");
        return false;
    } else {
        alert(loginErrorMsg);
    }
}

//Cookies are not functioning in my browser or in JSFiddle, can someone else check and see if cookies work for local pages on their browser? - Taitt
//Or check and see if there's something wrong with the code. - Taitt
//Source for problem: https://stackoverflow.com/questions/8105135/cannot-set-cookies-in-javascript 
function setcookie(x,y){
    //let d = new Date();
    //d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * 30);
    //Remembers for 30 days.
    let expires = "expires=";
    document.cookie = "username=" + x + expires + ";";
    document.cookie = "password=" + y + expires + ";";
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
