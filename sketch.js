const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function setup(){
	createCanvas(800,600)
	engine  = Engine.create()
	world  = engine.world

	helicopter = new Helicopter(400,100,100,100)
	ground = new Ground(400,560,800,20)
	package = new Package(400,100,20,20)

}


function draw(){
	background(0)
	Engine.update(engine)
	
	package.display()
	helicopter.display()
	ground.display()
	
}

function keyPressed(){
	if(keyDown(DOWN_ARROW)){
		Matter.Body.setStatic(package.body,false);
	}
}