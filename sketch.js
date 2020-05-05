var car,wall;
var speed,weight;


function setup() {
  createCanvas(1200,400);
  car=createSprite(50, 200, 20, 20);
  wall=createSprite(1100,200,20,70);
  speed=random(55,90);
  weight=random(400,1500);
  car.shapeColor="white";
}

function draw() {
  background(0,255,255);
  
  
  wall.shapeColor="blue";

  car.velocityX = speed;
  
  if (car.isTouching(wall)){
    car.collide(wall);
  if (speed>55 && speed<65){
    car.shapeColor="green";
   }
   if (speed>65 && speed<75){
     car.shapeColor="yellow";
   }
   if (speed>75 && speed<91){
     car.shapeColor="red"
   }
   
  }
 
  
  drawSprites();
}