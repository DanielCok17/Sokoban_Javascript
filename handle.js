function handleEvent(event) {
  switch (event.keyCode) {
    case 97:  /*posunuti vlavo */ 
      var dx = -1, dy = 0; break;
    case 115:  /* posunutie dole */ 
      var dx = 0, dy = 1; break;
    case 119:  /* posunuti hore */ 
      var dx = 0, dy = -1; break;
    case 100:  /* posunuti vpravo */ 
      var dx = 1; dy = 0; break;
	 case 112:  /* zastavenie zvuku */ 
     pauseAudio(); break; 
    case 32: /* reset Level */
      game.newGame(LevelNumber); return; break;
	  
    default: return; break;
  }
  switch (Map[PlayerPos[0] + dy][PlayerPos[1] + dx]) {
    
    case 0: move(dy, dx, "player"); break;
    case 2: case 3: 
      move(dy, dx, "crate"); 
      move(dy, dx, "player"); 
      break;
    case 6: move(dy, dx, "player"); break;
  }
}