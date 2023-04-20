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

const paddle = {
    // place the paddle horizontally in the middle of the screen
    x: canvas.width / 2 - brickWidth / 2,
    y: 440,
    width: brickWidth,
    height: brickHeight,
  
    // paddle x velocity
    dx: 0
};

const ball = {
    x: 130,
    y: 260,
    width: 5,
    height: 5,
  
    // how fast the ball should go in either the x or y direction
    speed: 2,
  
    // ball velocity
    dx: 0,
    dy: 0
  };

  

class PlayerObjTemplate{
    //Needed constructor to function. - Taitt
    constructor(x,y,width, height, dx,dy, graphicConst){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.dy = dy;
        this.graphicConst = graphicConst;
    }
}
class ObjectTemplate{
    //Needed Constructor to function - Taitt
    constructor(x,y,dx,dy, graphicConst){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.graphicConst = graphicConst;
    }
}
//"Assistant" Classes used by the Model View Controller Class. - Taitt
class UserInterfaceTemplate{
    constructor(gameInterface, playerObj){
        //Used to stylize the user interface. - Taitt
        this.userInterface = gameInterface;
        this.playerObj = playerObj;
    }
    interfaceControl(){
        throw new Error("Abstract Method has no implementation");
    }
}
class GraphicsTemplate{
    constructor(gameInterface, playerObj, object){
        //Used to stylize the graphics - Taitt
        this.gameInterface = gameInterface;
        //Needed Objects for game to function. - Taitt
        this.playerObj = playerObj;
        this.object = object;
    }
    graphicsGeneration(){
        throw new Error("Abstract Method has no implementation");
    }
}
class GameLogicTemplate{
    constructor(playerObj, object){
        //Needed objects for game to function - Taitt
        this.playerObj = playerObj;
        this.object = object;
    }
}
//The Model View Controller class
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
    startGame(){
        //Added Humorous error message.
        try{
            gameLoop();
        }
        catch(err){
            alert("Oops! Javascript Machine broke! We apologize for the error: " + err.message + ". Please contact an administrator or refresh :).")
        }
}
}

//Extension Examples - Taitt
//Extenstions and all the assistant Classes are used purely for keeping development neat and tidy while also allowing for further modularity
//If you are unable to implement already existing code as well, you can ignore the extension Classes. - Taitt

class PlayerObj1 extends PlayerObjTemplate{
    //Insert code here.
}

class Obj1 extends ObjectTemplate{
    //Insert Code here.
}

class UI1 extends UserInterfaceTemplate{
    //Insert Code Here.
    //This is just a sample, but many commands can be made here for interactions with HTML. - Taitt
    interfaceControl(){
    }
    //This will be for the user's Keyboard, allowing multiple key inputs - Taitt
    userControl(){

        // listen to keyboard events to move the paddle
        document.addEventListener('keydown', function(e) {
            // A key
            if (e.which === 65) {
              paddle.dx = -3;
            }
            // D key
            else if (e.which === 68) {
              paddle.dx = 3;
            }
          
            // space key
            // if they ball is not moving, we can launch the ball using the space key. ball
            // will move towards the bottom right to start
            if (ball.dx === 0 && ball.dy === 0 && e.which === 32) {
              ball.dx = ball.speed;
              ball.dy = ball.speed;
            }
        });
          
        // listen to keyboard events to stop the paddle if key is released
        document.addEventListener('keyup', function(e) {
            if (e.which === 65 || e.which === 68) {
              paddle.dx = 0;
            }
        });
        
    }
}

class Graphics1 extends GraphicsTemplate{
    graphicsGeneration(){
        //Insert Code Here
        const canvas = document.getElementById('game');
        const context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width,canvas.height);

        const level1 = [
            [],
            [],
            [],
            [],
            [],
            [],
            ['R','R','R','R','R','R','R','R','R','R','R','R','R','R'],
            ['R','R','R','R','R','R','R','R','R','R','R','R','R','R'],
            ['O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
            ['O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
            ['G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
            ['G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
            ['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y'],
            ['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y']
        ];

        const colorMap = {
            'R': 'red',
            'O': 'orange',
            'G': 'green',
            'Y': 'yellow'
        };

        const brickGap = 2;
        const brickWidth = 30;
        const brickHeight = 12;

        const wallSize = 3;
        const bricks = [];

        // draw walls
        context.fillStyle = 'lightgrey';
        context.fillRect(0, 0, canvas.width, wallSize);
        context.fillRect(0, 0, wallSize, canvas.height);
        context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

        // draw ball if it's moving
        if (ball.dx || ball.dy) {
            context.fillRect(ball.x, ball.y, ball.width, ball.height);
        }

        // draw bricks
        bricks.forEach(function(brick) {
            context.fillStyle = brick.color;
            context.fillRect(brick.x, brick.y, brick.width, brick.height);
        });

        // draw paddle
        context.fillStyle = 'cyan';
        context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    }
    //Insert Code Here
}

class GameLogic1 extends GameLogicTemplate{
    //Insert Code Here
    collides(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y;
    }
    
}

class Game1 extends GameTemplate{
    //This is an example for testing - Taitt Estes
    //Needed let vars here

    gameLoop(){
        //Insert needed "let" variables here for game functionality, then run the loop. - Taitt
        while(true){
            //Insert Code Here.
            
            paddle.x += paddle.dx;
    
            // prevent paddle from going through walls
            if (paddle.x < wallSize) {
            paddle.x = wallSize
            }
            else if (paddle.x + brickWidth > canvas.width - wallSize) {
            paddle.x = canvas.width - wallSize - brickWidth;
            }
        
            // move ball by it's velocity
            ball.x += ball.dx;
            ball.y += ball.dy;
        
            // prevent ball from going through walls by changing its velocity
            // left & right walls
            if (ball.x < wallSize) {
            ball.x = wallSize;
            ball.dx *= -1;
            }
            else if (ball.x + ball.width > canvas.width - wallSize) {
            ball.x = canvas.width - wallSize - ball.width;
            ball.dx *= -1;
            }
            // top wall
            if (ball.y < wallSize) {
            ball.y = wallSize;
            ball.dy *= -1;
            }
        
            // reset ball if it goes below the screen
            if (ball.y > canvas.height) {
            ball.x = 130;
            ball.y = 260;
            ball.dx = 0;
            ball.dy = 0;
            }
    
            if(collides(ball, paddle)){
                ball.dy *= -1;
            
                // move ball above the paddle otherwise the collision will happen again
                // in the next frame
                ball.y = paddle.y - ball.height;
            }

            // check to see if ball collides with a brick. if it does, remove the brick
            // and change the ball velocity based on the side the brick was hit on
            for(let i = 0; i < bricks.length; i++){
                const brick = bricks[i];
            
                if (collides(ball, brick)) {
                // remove brick from the bricks array
                bricks.splice(i, 1);
            
                // ball is above or below the brick, change y velocity
                // account for the balls speed since it will be inside the brick when it
                // collides
                if (ball.y + ball.height - ball.speed <= brick.y ||
                    ball.y >= brick.y + brick.height - ball.speed) {
                    ball.dy *= -1;
                }
                // ball is on either side of the brick, change x velocity
                else {
                    ball.dx *= -1;
                }
            
                break;
                }
            }
            
            return;
        }
    }
}


//Just another example.
//const thisPlayer = new PlayerObj1((canvas.width / 2) - (brickWidth / 2), 440,null,null);
// const thisObj = new Obj1(null,null,null,null,null);
// const thisUI = new UI1(null, thisPlayerObj);
// const thisGraphics = new Graphics1(null, thisPlayerObj, thisObj);
// const thisGameLogic = new GameLogic1(thisPlayerObj, thisObj);
// const thisGame = new Game1("NewGame","InsertCSS.css", thisUI, thisGraphics, thisGameLogic, thisUserControl);
