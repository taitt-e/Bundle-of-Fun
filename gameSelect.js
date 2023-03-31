//Will be used for gameSelect.html, gameSelect.css will also be used for that HTML.
//Figure out how to make and grab cookie of the user's username from login.html for the welcome message - Taitt

//Abstract Classes, GameTemplate & GameInterfaceTemplate

//Use this abstract class if the link idea doesn't work - Taitt
/*
class GameInterfaceTemplate{
    constructor(interface){
        //Probably link interface to a CSS File? - Taitt
        this.interface="type";
        //May need to remove this later, Idk if this can be implemented as an Abstract Class - Taitt
        if(this.constructor == GameInterfaceTemplate){
            throw new Error("Object of Abstract Class Cannot be created");
        }
    }
}
*/

class GameTemplate{
    constructor(gameName, gameInterface){
        this.gameName="gameName";
        //gameInterface would be the type of extension to GameInterface Template - Taitt
        //Probably link interface to a CSS File? - Taitt
        this.gameInterface="gameInterface";
        //May need to remove this later, Idk if this can be implemented as an Abstract Class - Taitt
        if(this.constructor == GameTemplate || this.constructor == GameInterfaceTemplate){
            throw new Error("Object of Abstract Class Cannot be created");
        }
    }
    /*
    savesEdit(){
        throw new Error("Abstract Method has no implementation");
    }
    */
    gameLoop(){
        throw new Error("Abstract Method has no implementation");
    }
    userControl(){
        throw new Error("Abstract Method has no implementation");
    }
}

class Game1 extends GameTemplate{
    //This is an example for testing - Taitt Estes
    userControl(){
        //Insert Code Here.
    }
    gameLoop(){
        //Insert needed "let" variables here for game functionality, then run the loop. - Taitt
        while(true){
            //Insert Code Here.
        }
    }
}