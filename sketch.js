
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,garbageObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	garbageObject = new paper(400,660,46)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  garbageObject.display();
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(garbageObject.body,garbageObject.body.p,{x:100,y:-100})
	}
}
