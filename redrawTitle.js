/* vyhreslenie vseobenej mapy,pomahanie s internetom*/
function redrawTile(y, x, mp) {
  ctx.drawImage(Image,
    arguments.length == 2 ? Map[y][x] * SIZE : mp * SIZE, 0, 
   SIZE, SIZE, x * SIZE, y * SIZE, SIZE, SIZE);
}
