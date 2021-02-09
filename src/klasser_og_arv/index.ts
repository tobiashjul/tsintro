//Reference to the CanvasRenderContext2D in the Canvas Element in the HTML document
var canvas : HTMLCanvasElement = document.getElementById("theCanvas") as HTMLCanvasElement;
var ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

//The shape interface that all shapes implement. Contains a draw method for displaying the shape on the canvas.
interface Shape{
	draw():void;
}

//The three differnt shapes that the canvas is going to display. Each containing unique logic for displaying their own shape.
class Triangle implements Shape{
	draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.moveTo(canvas.width/2,canvas.height/2);
		ctx.lineTo(canvas.width/2,canvas.height/2+20);
		ctx.lineTo(canvas.width/2+20,canvas.height/2);
		ctx.closePath();
		ctx.fillStyle = "red";
		ctx.fill();
	}	
}

class Square implements Shape{
	draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "red";
		ctx.fillRect(canvas.width/2,canvas.height/2,20,20);
	}	
}

class Circle implements Shape{
	draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.arc(canvas.width/2, canvas.height/2, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = "red";
		ctx.fill();
	}	

}

//ShapeFactory interface that all factories implement. Contains a createShape method for creating shapes.
interface ShapeFactory{
	createShape(): Shape;
}

//The three differnt factories that implement the ShapeFactory interface.
class SquareFactory implements ShapeFactory{
	createShape(): Shape{
		return new Square() as Shape;
	}
}

class CircleFactory implements ShapeFactory{
	createShape(): Shape{
		return new Circle() as Shape;
	}
}

class TriangleFactory implements ShapeFactory{
	createShape(): Shape{
		return new Triangle() as Shape;
	}
}

//Logic for creating the different shapes through the three implementations of the shapefactory interface

var square: Shape = (new SquareFactory() as ShapeFactory).createShape() as Shape;

var triangle: Shape = (new TriangleFactory() as ShapeFactory).createShape()  as Shape;

var circle: Shape = (new CircleFactory as ShapeFactory).createShape()  as Shape;

//Event Listeners  for the three buttons

(document.getElementById("square") as HTMLButtonElement).addEventListener("click",()=>(square.draw()));

(document.getElementById("triangle") as HTMLButtonElement).addEventListener("click",()=>(triangle.draw()));

(document.getElementById("circle") as HTMLButtonElement).addEventListener("click",()=>(circle.draw()));