var astronaut, eat, gym, move, bath, sleep, drink, bg;
var backGround;


function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}


function setup() {
  createCanvas(2400,1170);
  createSprite(400, 200, 50, 50);

  backGround = createSprite(1200,700);
  backGround.addAnimation("bg", bg);  
  backGround.scale = 0.5;

  astronaut = createSprite(1200,720);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.2;

}

function draw() {
  background(255,255,255);  

  createEdgeSprites();  

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 720;
  astronaut.velocityX= 0;
  astronaut.velocityY= 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 720;
  astronaut.velocityX = 0;
  astronaut.velocityY= 0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 720;
  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 720;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("w")){
  astronaut.y = astronaut.y - 8;
}

if(keyDown("a")){
  astronaut.x = astronaut.x - 8;
}

if(keyDown("s")){
  astronaut.y = astronaut.y + 8;
}

if(keyDown("d")){
  astronaut.x = astronaut.x + 8;
}

  drawSprites();
}