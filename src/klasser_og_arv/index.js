"use strict";
//Reference to the CanvasRenderContext2D in the Canvas Element in the HTML document
var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
//The three differnt shapes that the canvas is going to display. Each containing unique logic for displaying their own shape.
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 + 20);
        ctx.lineTo(canvas.width / 2 + 20, canvas.height / 2);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();
    };
    return Triangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(canvas.width / 2, canvas.height / 2, 20, 20);
    };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();
    };
    return Circle;
}());
//The three differnt factories that implement the ShapeFactory interface.
var SquareFactory = /** @class */ (function () {
    function SquareFactory() {
    }
    SquareFactory.prototype.createShape = function () {
        return new Square();
    };
    return SquareFactory;
}());
var CircleFactory = /** @class */ (function () {
    function CircleFactory() {
    }
    CircleFactory.prototype.createShape = function () {
        return new Circle();
    };
    return CircleFactory;
}());
var TriangleFactory = /** @class */ (function () {
    function TriangleFactory() {
    }
    TriangleFactory.prototype.createShape = function () {
        return new Triangle();
    };
    return TriangleFactory;
}());
//Logic for creating the different shapes through the three implementations of the shapefactory interface
var square = new SquareFactory().createShape();
var triangle = new TriangleFactory().createShape();
var circle = (new CircleFactory).createShape();
//Event Listeners  for the three buttons
document.getElementById("square").addEventListener("click", function () { return (square.draw()); });
document.getElementById("triangle").addEventListener("click", function () { return (triangle.draw()); });
document.getElementById("circle").addEventListener("click", function () { return (circle.draw()); });
