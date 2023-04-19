//Arrays of usernames/passwords
const usernames = [];
const passwords = [];

//Admin account
usernames[0] = "admin";
passwords[0] = "admin";

function addNewUserToDB(){
    var newUsername = "";
    var newPassword = "";
    let userForm    = document.getElementById("userForm");

    //Retrieve user credentials from the form submission
    newUsername = userForm.elements["usr"].value;
    newPassword = userForm.elements["pwd"].value;

    //Add the new user to the database
    usernames.push(newUsername);
    passwords.push(newPassword);

    //Log the creation (for admin use)
    //Find out how to display in console.log
    alert("New user created:\n" + "Username: " + newUsername + "\nPassword: " + newPassword);
    alert("New User Database:\nUsernames: " + usernames + "\nPasswords: " + passwords);
}
