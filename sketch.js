



var bullet

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 10);
    bullet.debug = false;
  }

var speed,thickness,wall,weight;

function draw() {
thickness = random(23,83);
wall=createSprite(1200,200,thickness,200);
weight = random(30,52);
speed = random(223,321);
bullet.velocityX=speed;
if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage >= 10)
{
wall.shapeColor = color(255,0,0);
}
else if (damage < 10){
wall.shapeColor=color(0,255,0);
}}
background(0);
drawSprites();
}