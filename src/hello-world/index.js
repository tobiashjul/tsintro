"use strict";
var c = document.getElementById("Canvas");
function draw(figure) {
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, figure.length, figure.height);
}
var mySquare = { height: 20, length: 20 };
draw(mySquare);
