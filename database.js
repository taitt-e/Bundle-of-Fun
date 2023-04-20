//Arrays of usernames/passwords
const accountsArray = [];

//Normal user
class UserAccount extends User{
    constructor(username, password) {
        super();
        this.username = username;
        this.password = password;

        //For now, userStats[0] = completed levels, userStats[1] = checkpoints, userStats[2] = highscore
        this.userStats = [0, 0, 0];
    }
}

//Admin
class AdminAccount extends User{
    constructor(username, password) {
        super();
        this.username = username;
        this.password = password;
    }
}

//Admin account
let admin = new AdminAccount("admin", "admin");
accountsArray[0] = admin;

let user1 = new UserAccount("user1", encryptPassword(shift, "password1"));
accountsArray[1] = user1;

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
