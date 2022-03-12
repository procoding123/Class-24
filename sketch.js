
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 45;
var engine,world,fan1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  fan1 = new Ground(200,200,100,20);
   
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  button = createImg("up.png");
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(vForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fan1.display();

  ellipse(ball.position.x,ball.position.y,20);
 
 

  

  
  
}

   function vForce(){
     Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
   }

