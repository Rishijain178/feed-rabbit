var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprite = math.round(random(1,2));

if(framecount % 80 == 0){
  if (select_sprite == 1){

  }
  eles}

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  grassImg=loadImage("grass.png");
  leafImg=loadImage("leaf.png");
  orangeLeafImg=loadImage("oramgeLeaf.png");

}

function setup(){
  rabbit.x=mouse.x+1;
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function createApples();
apple=createSprite(random(50,350),40,10,10);
apple.addImage(apple.png);
apple.velocityY=-4;
apple.lifeline(200);






function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}