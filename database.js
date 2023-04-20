//Arrays of usernames/passwords
const accountsArray = [];
const statsArray    = [];
const adminLog      = [];

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

//Adds a new user to the database from the CreateUser page
function addNewUserToDB(newUser){
    let user = new UserAccount(newUser.username, newUser.encryptedPassword);

    //Add the new user to the database
    accountsArray.push(user);

    //Log the creation (for admin use)
    adminLog.push("New user created:" + "\nUsername: " + user.username + "\nPassword (Encrypted): " + user.password);
    //Alerting the change until admin functionality is added
    alert(adminLog);
}

//Takes login attempt info from the login page and checks if it matches a users credentials in the database
function validateUserInDB(usernameToCheck, passwordToCheck){
    const shift = 14;

    //Check for admin account
    if((usernameToCheck == "admin") && (passwordToCheck == "admin")){
        return true;
    } else{ //Check for user account
        for(let i = 0; i<accountsArray.length; i++){
            //If the username and password match the attempt
            if((accountsArray[i].username == usernameToCheck) && (accountsArray[i].password == encryptPassword(shift, passwordToCheck))){
                return true;  //The login info is correct
            }
        }
    }
    return false; //The login info is incorrect
}

//Check if the user is an admin. Only checks for the "admin" username right now.
function isAdmin(selectedUser) {
    if(selectedUser.username == "admin"){
        return true;
    }
    return false;
}

//This function will be used in later updates to allow for game stats to be updated.
//The method will be called with the user to update stats for as well as integers representing how much changed.
//For example, updateGameStats(accountsArray[1], 1, 0, 0) will add 1 to the amount of levels completed only.
function updateGameStats(user, levelsCompleted, checkPoints, score){
    //Updating completed levels
    if(levelsCompleted > 0){
        user.userStats[0] += levelsCompleted;
    }

    //Updating checkpoints
    if(checkPoints > 0){
        user.userStats[1] += checkPoints;
    }

    //Updating highscore (if the new score is bigger than the previous highscore)
    if(user.userStats[2] < score){
        user.userStats[2] = score;
    }
}

function createFakeUser(){
    fakeUser = createFakeData();
    fakeDataDB.push(fakeUser);    //Add to fake data database
}

//Create a fake user/data for testing
function createFakeData(){
    let user = new UserAccount("fake_User", "password");

    fakeUser.userStats[0] = Math.floor(Math.random() * 11);      //Integer between 0 and 10
    fakeUser.userStats[1] = Math.floor(Math.random() * 21);      //Integer between 0 and 20
    fakeUser.userStats[2] = Math.floor(Math.random() * 1001);    //Integer between 0 and 1000

    return user;
}
