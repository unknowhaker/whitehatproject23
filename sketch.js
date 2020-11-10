const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var groundSprite, helicopterSprite, packageSprite;
var helicopterImage, packageImage;

var engine, world, packageBody, ground, box1, box2, box3;

function preload(){
	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
}

function setup(){
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(400,680,800,20,{isStatic:true});
	World.add(world,ground);

	groundSprite = createSprite(400,680,800,20);

	packageBody = Bodies.circle(400,120,5,{restitution:0.1,isStatic:true});
	World.add(world,packageBody);

	packageSprite = createSprite(400,120,5,5);
	packageSprite.addImage(packageImage);
	packageSprite.scale = 0.1;

	helicopterSprite = createSprite(400,100,100,50);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale = 0.6;

	box1 = new Box(400,660,200,20);
	box2 = new Box(290,620,20,100);
	box3 = new Box(510,620,20,100);

	

	
}

function draw(){
	background(0);
	
	Engine.update(engine);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	groundSprite.x = ground.position.x;
	groundSprite.y = ground.position.y;

	if (keyDown("down")){
		Matter.Body.setStatic(packageBody,false);
	}

	if (keyDown("left")){
		helicopterSprite.x = helicopterSprite.x-20;
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody,translation);
	}

	if (keyDown("right")){
		helicopterSprite.x = helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody,translation);
	}

	drawSprites();

	box1.display();
	box2.display();
	box3.display();
}