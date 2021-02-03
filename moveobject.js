/* ovladanie objektov,pomoc s uz funkcnym prikladom,kodom*/

function move(dy, dx, objectType) {

  /* hracove suradnice */
  var objY = PlayerPos[0];
  var objX = PlayerPos[1];

  /* pridavanie pozicii*/
  if (objectType == "crate") {
    objY += dy;
    objX += dx;
  }

  /* pokial sa nemoze pohnut return */
  switch (Map[objY + dy][objX + dx]) {
    case 1: case 2: case 3: case 4: case 5: return; break;
  }

  /* odstranovanie starych objektov,pozicii */
  switch(Map[objY][objX]) {
    case 2: case 4: Map[objY][objX] = 0; break;
    case 3: case 5: Map[objY][objX] = 6; break;
  }

  /* prekreslenie hraca  */
  if (objectType == "player")
    redrawTile(objY, objX);

  /* ovladanie objektu */
  objY += dy;
  objX += dx;

  /* pridanie objektu na nove miesto */
  switch (Map[objY][objX]) {
    case 0: Map[objY][objX] = objectType == "crate" ? 2 : 4; break;
    case 6: Map[objY][objX] = objectType == "crate" ? 3 : 5; break;
  }

  /* prekreslenie kbjektu*/
  redrawTile(objY, objX);

  
  if (objectType == "player")
    PlayerPos = [objY, objX];

  /* kontrola pozicie vyhry */
  else if (objectType == "crate")


    if (Map[objY][objX] == 3) {
      for (var y = 0; y < Map.length; y++)
        for (var x = 0; x < Map[y].length; x++)
          if (Map[y][x] == 2) return;
      game.newGame(++LevelNumber);
    }
}

  