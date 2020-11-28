
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dust1 , dust2 , dust3;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(75 , 400 , 30);
	ground = new Ground(650 , 580 , 1300 , 20);
	dust1 = new Dustbin(1105 , 560 , 150 , 20);
	dust2 = new Dustbin(1040 ,485 , 20 , 150);
	dust3 = new Dustbin(1170 , 485 , 20 , 150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paperObject.show();
  ground.show();
  dust1.show();
  dust2.show();
  dust3.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body , paperObject.body.position , {x:45 , y:-65});
	}
}


