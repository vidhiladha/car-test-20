var car , wall; 
var speed , weight; 
function setup(){ 
 createCanvas(1600,400);
  speed = random(55,90);
   weight = random(400,1500);
    car = createSprite(50,200,50,50);
     car.velocityX = speed;
   car.shapeColor = "blue"; 
 wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "pink";
 } 
 
 function draw(){
      background(225,225,225);
       //car.x = World.mouseX ; 
       // car.y = World.mouseY;
       if(wall.x-car.x < (car.width+wall.width)/2) {
  
        car.velocityX=0;
  var defromation = 0.5 * weight * speed * speed/22509; if(defromation>180)
   { car.shapeColor = Color(255,0,0); } if(defromation<180 && defromation>100) {
        car.shapeColor = Color(230,230,0);
     } 
     if(defromation<100) { car.shapeColor = Color(0,255,0); } }
      drawSprites(); }