
var monkey , monkey_running, monkeyImage
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage = loadImage("sprite_0.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(300,490,15,15);
  monkey.addAnimation("running", monkey_running);
  monkey.addImage(monkeyImage);
  monkey.scale = 0.1;
  
  ground = createSprite(100,500,600,10);
  
  bGroup = new Group();
  stoneGroup = new Group();
  
  score = 0
}


function draw() {
background("white");
  
  score = score + Math.round(getFrameRate()/60);
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ score,200,200);
  
  banana();
  stone();
  
  if(keyDown("space")&& monkey.y > 460) {
        monkey.velocityY = -10;    
    }
   
  monkey.velocityY = monkey.velocityY + 0.8
  
  ground.velocityX = -5;
     
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  drawSprites();
}

function banana(){
   if(frameCount % 80 === 0) {
     food = createSprite(500,500,15,15);
     food.addImage(bananaImage);
     food.scale = 0.1;
     food.y = Math.round(random(450,400));
     food.lifetime = 100;
     food.velocityX = -3;
}
}

function stone(){
  if(frameCount % 300 === 0) {
     obstacle = createSprite(500,490,15,15);
    //obstacle.scale = 0.1;
     obstacle.lifetime = 100;
     obstacle.velocityX = -3;
}
}



