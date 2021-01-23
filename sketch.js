var monkey,monkeyimage,backgroundimage,bananaGroup,bananaimage,ground,stonegroup,stoneimage
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var count = 0;          
function preload(){
  createCanvas(400, 400);
backgroundimage=loadImage("jungle2.jpg")
monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")  
bananaimage=loadImage("Banana.png")  
stoneimage=loadImage("stone.png")
}
function setup() {
  createCanvas(400, 400);
bananaGroup=new Group()
stonegroup=new Group()
  scene=createSprite(0,0,400,400)
scene.addImage(backgroundimage)
scene.x=scene.width/2
monkey=createSprite(50,340,30,30)
monkey.addAnimation("running",monkeyimage)
  monkey.scale=0.2
scene.scale=1.5
ground=createSprite(200,390,400,10)
ground.visible=false
}

function draw() {
  textSize(18);
textFont("Georgia");
textStyle(BOLD);
  monkey.x=camera.position.x-150
scene.velocityX=-2
if(scene.x<=camera.position.x-100){
  scene.x=camera.position.x
}
  if(keyDown("space")&&monkey.y>=322){
    monkey.velocityY=-15
  }
monkey.velocityY=monkey.velocityY+0.5  
  monkey.collide(ground)
  spawnbanana()
  spawnstone()
if(bananaGroup.isTouching(monkey)){
  count=count+5 
  monkey.scale=0.2
    bananaGroup.destroyEach();
   
}
if(stonegroup.isTouching(monkey)){
  monkey.scale=0.08
}
drawSprites();
  text("Score: "+ count, 250, 100);
}
function spawnbanana() {
  if (World.frameCount % 80 === 0) {
     banana = createSprite(400,320,40,10);
    banana.y = random(150,230);
    banana.addImage(bananaimage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     
    banana.lifetime = 134;
    
    
    bananaGroup.add(banana);
  }
  
}
function spawnstone(){
  if (World.frameCount % 300 === 0) {
     stone = createSprite(400,360,40,10);
    
    stone.addImage(stoneimage);
    
    stone.velocityX = -3;
    stone.scale = 0.2;
     
    stone.lifetime = 134;
    stonegroup.add(stone)
  
  
  }}





