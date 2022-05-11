//game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
music.loop = true;
music.volume = 0.5;
const timeBetweenUpdates = 0.1; //milliseconds
const debugModeIsOn = true;
const startKey = "f";
const restartKey = "r";
const hitboxColor = "#00FF02";
const hitboxOND = "#FF0000"
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

//DIAMOND
let diamonds = [];

//make the bird
let bird = new Bird();

// create the scoreboard
let score = new Score ();

let liv = 3;
let livscore = new Livscore ();





// create 3 clouds cloud
new Cloud();
new Cloud(spawnXPosition-500);
new Cloud(spawnXPosition-1000);

// create menu texts
let startText = new TextObject(
    "Press [F] to start" // text
);

let flapText = new TextObject(
    "Press [F] to flap wings"
);
flapText.isActive = false;

let gameOverText = new TextObject (
    "Press " + restartKey + " to restart"
);
gameOverText.isActive = false;