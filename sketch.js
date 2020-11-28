var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey=createSprite(80,315,20,20);
  monkey.addImage("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(200,350,2000,10);
  ground.velocityX=-4;
  
  bananas();
  obstacles();
  foodGroup=newGroup;
  obstacleGroup=newGroup;
  
  stroke=("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500,50)
  
  stroke=("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  
  
  
}


function draw() {
  background("lightblue")
  if(ground.x < 0){
    ground.x=ground.width/2;
  }

  if(keyDown("Space")&& monkey.y>=100){
    monkey.velocityY=-15;
  }
  //gravity
  
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
  
  
  if(monkey.isTouching(obstacleGroup)){
   ground.velocityY=0;
    foodGroup.velocityY=0;
    obstacleGroup.velocityY=0;
  }
  
  
  if(monkey.isTouching(foodGroup)){
    score = +1;
    
  }
  
  
  
  drawSprites();
}


function bananas(){
  
  if(frameCount%80===0){
    banana=createSprite(200,(120,200),50,50);
    banana.addImage("banana",bananaImage);
    banana.velocityX=-2;
    banana.lifetime=50;
    
    foodGroup.add(banana);    
  }
}



function obstacles(){
  if(frameCount%300===0){
    stone=createSprite(200,(90,200),50,50);
    stone.addImage("stone",obstacleImage);
    stone.velocityX=-2;
    stone.lifetime=50;
    
    obstacleGroup.add(stone);    
  }
  
}





