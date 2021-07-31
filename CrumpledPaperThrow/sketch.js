
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crushedPaper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	crushedPaper=new Paper(200,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  KeyPressed(crushedPaper);
  
  groundObject.display();
  dustbinObj.display();
  crushedPaper.display();

}

function KeyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(crushedPaper.body,crushedPaper.body.position,{x: 130,y: -140});
	}
}
