 var ship,shipImage,sea,seaImage;
 //var invisiblesea;
function preload(){
  // load image
  seaImage=loadImage("sea.png");
  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){ 

  createCanvas(400,400);

// creating sea
 sea =createSprite(200,200,400,400);
 sea.addImage(seaImage)
 sea.velocityX=-3;

 // invisiblesea= createSprite(200,180,400,10)
 // invisiblesea.visible=false

//Creating ship
 ship =createSprite(80,300,70,50);
 ship.addAnimation("ship", shipImage);
 ship.scale = 0.2;

}

function draw() {


  //to move background
  if(sea.x<0){
    sea.x=sea.width/2
  }
   //ship.collide(invisiblesea)
   
  drawSprites();
}