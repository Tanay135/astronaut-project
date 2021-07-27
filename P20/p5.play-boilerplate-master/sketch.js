const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var bath;
var brush;
var drink;
var eat;
var gym;
var bg;
var walk;
var sleep;
var astronaut;



function preload(){}
bg = loadImage("Image/iss.png");
bath = loadAnimation("Image/bath1.png","Image/bath2.png");
brush = loadImage("Image/brush.png");
drink = loadAnimation("Image/drink1.png","Image/drink2.png");
eat = loadAnimation("Image/eat1.png","Image/eat2.png");
gym = loadAnimation("Image/gym1.png","Image/gym2.png","Image/gym11.png","Image/gym12.png");
walk = loadAnimation("Image/move.png","Image/move1.png");
sleep = loadImage("Image/sleep.png");




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //this is where we will make the simple astronaut sprite and add it's sleeping animation ༼ つ ◕_◕ ༽つ
  astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;
 World.add;

 //this where we will add the instructions ༼ つ ◕_◕ ༽つ
 text("Instructions",100,10);
 text("Up Arrow = Brushing",100,25);
 text("Down Arrow = Working out",100,40);
 text("Left Arrow = Eating",100,55);
 text("Right Arrow = Bathing",100,70);
 text("M = Moving",100,85);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}