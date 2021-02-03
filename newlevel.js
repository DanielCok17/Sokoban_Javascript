class Game{ 
	constructor(){}
	
 newGame(level) {

  
  if (level == "random") 
    level  =  1;
  this.thisMap = gRawMaps[level];

  
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);
  Map = [];

  /*nacitavanie do 2 rozmerneho pola */
  var mp, tmparr = [];
  for (var y = 0; y < this.thisMap.length; y++) {
    for (var x = 0; x < this.thisMap[y].length; x++) {
      switch (this.thisMap[y][x]) {
        case ' ': mp = 0; break; /* podlaha */
        case '#': mp = 1; break; /* steny */
        case 'o': mp = 2; break; /* debnicky */
        case '*': mp = 3; break; /* deb v deb */
        case '@': mp = 4; PlayerPos = [y, x]; break; /* hrac */
        case '+': mp = 5; break; /* hrac v bed */
        case '.': mp = 6; break; /* vyhra */
        case 'x': mp = 9; break; /* stena */ 
      }
      tmparr.push(mp);
      if (mp != 9)
        redrawTile(y, x, mp);
    }
    Map.push(tmparr);
    tmparr = [];
  }
  ctx.fillStyle = "blue";
  ctx.fillText("Level: " + (LevelNumber + 1) ,0, CANVAS_HEIGHT-SIZE -5);
}}