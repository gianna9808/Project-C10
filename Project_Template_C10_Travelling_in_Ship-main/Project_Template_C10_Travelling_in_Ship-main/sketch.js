
function preload(){
 shipImg = preload("ship-1.png","ship-2.png")
 seaImg = preload("sea.png")
}

function setup(){
  createCanvas(400,400);

  var sea_bg = createSprite(200,200);
  sea_bg.addImage(seaImg);
  sea_bg.velocityX = 3;
  
  var ship = createSprite(20,100)
  ship.addImage(shipImg);

  if(sea_bg.x < 0){
    sea_bg.x = sea.width/2;
  }

  seaImg = loadImage("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-2.png");
}

function draw() {
  background("blue");
  
}