var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;
var SIZE = 20;
var Map;             
var ctx;   
var PlayerPos;       
var LevelNumber = 0; 
var Image;           
var music = new Audio("22.mp3");
var game;
var canvas;

/*globalne premenne */

function Main(canvasName, imagePath) {
    /* nacitavanie obrazku */
   imagePath = "obr.png";
  Image = new Image();
  Image.src = imagePath;
  Image.onload = function () {

    canvas = document.getElementById(canvasName);
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    canvas.addEventListener("keypress", handleEvent, false);
    canvas.focus();
    ctx = canvas.getContext("2d");
    ctx.font = "bold " + SIZE + "px sans-serif";
    	
	
	game = new Game();
	
	playAudio();
	game.newGame(LevelNumber);
  }
}

