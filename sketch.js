var mbox , fbox ;
var wall , car ;




function setup() {
  createCanvas(800,400);
 fbox =  createSprite(400, 200, 50, 50);
 fbox.shapeColor = "orange"
mbox = createSprite ( 100,100,20 ,20);
mbox.shapeColor = "orange"
car = createSprite (200,300,40,30);
car . shapeColor = "blue"
wall = createSprite(700,400,50,350);
wall.shapeColor = "pink"
car.velocityX = 2 ;
//wall.velocityX = -2;

}

function draw() {
  background("grey");  
  mbox.x = mouseX;
  mbox.y = mouseY;
  console.log(mbox.x-fbox.x);
  //algorithm for touching two objects
  if(mbox.x-fbox.x<fbox.width/2+mbox.width/2 &&
    fbox.x-mbox.x<fbox.width/2+mbox.width/2 && 
    mbox.y - fbox.y<fbox.height/2+mbox.height/2 &&
    fbox.y - mbox.y<mbox.height/2+fbox.height/2){
    fbox.shapeColor = "red";
    mbox.shapeColor = "red";
  }
  else{
    fbox.shapeColor = "orange";
    mbox.shapeColor = "orange";
  }

//algorithm for bounce off



if(car.x-wall.x<wall.width/2+car.width/2 &&
  wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX = car.velocityX*(-1);
 //   wall.velocityX = wall.velocityX*(-1);
  } 

 // if(car.x-mbox.x<mbox.width/2+car.width/2 &&
  //  mbox.x-car.x<mbox.width/2+car.width/2){
    //  car.velocityX = car.velocityX*(-1);
   //   wall.velocityX = wall.velocityX*(-1);
   //var  } 



  
  drawSprites();
}