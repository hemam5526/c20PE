const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world 

var ground

function setup()
{
  createCanvas(400,400);

  engine = Engine.create(); 
  //automatically a world gets created, you just save that world in a variable
  world = engine.world; // world is ready

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world, ground);

  console.log(ground.position.x)


}

function draw() 
{
  background("yellow");
  Engine.update(engine)
 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

}

