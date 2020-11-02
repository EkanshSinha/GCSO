var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createCanvas(50,200,50,50);
  wall=createCanvas(1500,200,60,hight/2);

   //createSprite(400, 200, 50, 50);

   speed=random(55,90);
   weight=random(400,1500);
   wall.shapeColour=colour(80,80,80);

   car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
   if(wall.x-car.x < (car.weight=wall.weight)/2)
   {
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     car.shapeColour=colour(255,0,0);
   }
   
   if(deformation<180 && deformation>100)
   {
     Car.shapeColour=colour(230,230,0);
   }

   if(deformation<100)
   {
   car.shapeColour=color(0,255,0);

   }
  }



  drawSprites();
}