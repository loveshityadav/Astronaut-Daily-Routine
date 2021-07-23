function setup() {
  createCanvas(800,400);
  

  back = createSprite(400,200)
  back.addImage(bg)
  back.scale = 0.2

  astonaut = createSprite(400,200)
  astonaut.addAnimation("s1",sleep)
  astonaut.scale = 0.1

  edges = createEdgeSprites()

}

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym11.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png")
}

function draw() {
  background("black");  
  drawSprites();
  stroke ("white")
  textSize(12)
  text("INSTRUCTIONS:",50,50)
  text("UP ARROW = BRUSH",50,64)
  text("DOWN ARROW = GYM",50,78)
  text("LEFT ARROW = EAT",50,92)
  text("RIGHT ARROW = MOVE",50,106)

  if(keyDown(UP_ARROW)){
    astonaut.addAnimation("brushing",brush)
    astonaut.changeAnimation("brushing",brush)
    astonaut.y = 350
    astonaut.velocityX = 0
    astonaut.velocitY = 0
  }

  if(keyDown(DOWN_ARROW)){
    astonaut.addAnimation("gyming",gym)
    astonaut.changeAnimation("gyming",gym)
    astonaut.y = 250
    astonaut.velocityX = 0
    astonaut.velocitY = 0
  }

  if(keyDown(LEFT_ARROW)){
    astonaut.addAnimation("eating",eat)
    astonaut.changeAnimation("eating",eat)
    astonaut.y = 250
    astonaut.velocityX = 0
    astonaut.velocitY = 0
  }

  if(keyDown(RIGHT_ARROW)){
    astonaut.addAnimation("moving",move)
    astonaut.changeAnimation("moving",move)
    astonaut.y = 250
    astonaut.velocityX = -2
    astonaut.velocitY = 2
  }

  astonaut.bounceOff(edges)

}

