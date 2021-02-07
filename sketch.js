
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,tree,boyimg,treeimg;
var stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload()
{
boyimg = loadImage("boy.png")	
treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 650);

	engine = Engine.create();
	world = engine.world;

	 boy = createSprite(200,500,10,10)
	 boy.addImage(boyimg)
	 boy.scale = 0.1;

	 tree = createSprite(950,300,10,10)
	 tree.addImage(treeimg)
	 tree.scale = 0.5;

	 stone = new Stone(199,500)
	 ground = new Ground(150,600,2500,20)

	
	 mango1 = new Mango(900,300)
	 mango2=new Mango(800,200)
	 mango3=new Mango(1100,150)
	 mango4=new Mango(1080,280)
	 mango5=new Mango(990,80)
	 mango6=new Mango(920,100)
	 mango7=new Mango(940,200)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);

  drawSprites();
   
  ground.display();
  
  boy.display();
 tree.display();

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
    stone.display();
  detectCollision(stone,mango1)
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.position;
	stoneBodyPosition=lstone.position;
	
	var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y);
	if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango,false);
	}
	
	
		}



