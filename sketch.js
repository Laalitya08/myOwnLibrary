var movingRect, fixedRect;
var rect1, rect2;
var topRect,bottomRect;

function setup() {
  createCanvas(1200,1200);

  topRect = createSprite(600,70,50,80);
  topRect.shapeColor = "Orange";

  bottomRect = createSprite(600,600,50,80);
  bottomRect.shapeColor = "Red";

  topRect.velocityY = 5;
  bottomRect.velocityY = -5;


  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(300,200,50,80);
  fixedRect.shapeColor = "Yellow";

  rect1 = createSprite(200,200,50,80);
  rect1.shapeColor ="yellow";

  rect2 = createSprite(100,200,50,50);
  rect2.shapeColor = "yellow";
  
}

function draw() {
  background(255,255,255);

  bounceOff(topRect,bottomRect);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(isTouching(movingRect, fixedRect)) {
    fixedRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "yellow";
  }

  if(isTouching(movingRect,rect1)){
    rect1.shapeColor ="red";
  }
  else{
    rect1.shapeColor = "yellow";
  }

  if(isTouching(movingRect,rect2)){
    rect2.shapeColor ="red";
  }
  else{
    rect2.shapeColor = "yellow";
  }

  drawSprites();
}

