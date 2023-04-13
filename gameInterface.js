//This file will contain all of the needed inheritance class methods
//that games will inherit from to build more games in the future - Taitt

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
//"Base" Classes applied in "Assistant" CLasses
class PlayerObj{
    //Needed constructor to function.
    constructor(x,y,dx,dy, graphicConst){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.graphicConst = graphicConst;
    }
}
class Object{
    //Needed Constructor to function
    constructor(x,y,dx,dy, graphicConst){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.graphicConst = graphicConst;
    }
}
//"Assistant" Classes used by the controller Class.
class UserInterface{
    constructor(gameInterface){
        //Used to stylize the user interface.
        this.userInterface = gameInterface;
    }
    interfaceControl(){
        throw new Error("Abstract Method has no implementation");
    }
}
class Graphics{
    constructor(gameInterface, playerObj, object){
        //Used to stylize the graphics
        this.gameInterface = gameInterface;
        //Needed Objects for game to function.
        this.playerObj = playerObj;
        this.object = object;
    }
    graphicsGeneration(){
        throw new Error("Abstract Method has no implementation");
    }
}
class GameLogic{
    constructor(playerObj, object){
        //Needed objects for game to function
        this.playerObj = playerObj;
        this.object = object;
    }
}
class UserControl{
    constructor(playerObj){
        //The Object the user will be able to control
        this.playerObj = playerObj;
    }
}
//The controller class
class GameTemplate{
    constructor(gameName, gameInterface, userInterfaceExt, graphicsExt, gameLogicExt){
        this.gameName = gameName;
        //gameInterface would be the type of extension to GameInterface Template - Taitt
        //Probably link interface to a CSS File? - Taitt
        this.gameInterface = gameInterface;
        //UserInterface Class Extension
        this.userInterfaceExt = userInterfaceExt;
        //Graphics Class extension
        this.graphicsExt = graphicsExt;
        //Game Logic Extension
        this.gameLogicExt = gameLogicExt;
        //User Controls Extension
    }
    /*
    savesEdit(){
        throw new Error("Abstract Method has no implementation");
    }
    */
    gameLoop(){
        throw new Error("Abstract Method has no implementation");
    }
}

//Extension Examples
//Extenstions and all the assistant Classes are used purely for keeping development neat and tidy while also allowing for further modularity
//If you are unable to implement already existing code as well, you can ignore the extension Classes.



class Game1 extends GameTemplate{
    //This is an example for testing - Taitt Estes
    //Needed let vars here
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