interface square{
   height : number;
   length : number;
}
var c : HTMLCanvasElement = document.getElementById("Canvas") as HTMLCanvasElement;

function draw(figure: square) {
   var ctx = c.getContext("2d") as CanvasRenderingContext2D;
   ctx.fillStyle = "#FF0000";
   ctx.fillRect(0,0,figure.length,figure.height);
}
let mySquare : square = {height: 20, length: 20};
draw(mySquare);