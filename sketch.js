var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    helicopterIMG = loadImage("helicopter.png")
    packageIMG = loadImage("package.png")
}

function setup() {
    createCanvas(800, 500);
    rectMode(CENTER);


    packageSprite = createSprite(width / 2, 80, 10, 10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2;

    helicopterSprite = createSprite(width / 2, 100, 10, 10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale = 0.6

    groundSprite = createSprite(width / 2, height - 15, width, 30);
    groundSprite.shapeColor = color("green")


    engine = Engine.create();
    world = engine.world;


    var g = {
        isStatic: true,
        restitution: 0.7
    }

    packageBody = Bodies.circle(width / 2, 100, 5, g);
    World.add(world, packageBody);


    //Create a Ground

    ground = Bodies.rectangle(width / 2, height - 30, width, 30, g);

    World.add(world, ground);

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    ellipseMode(RADIUS);
    background(0);
    packageSprite.x = packageBody.position.x;
    packageSprite.y = packageBody.position.y;
    if (keyDown("space")) {
        Matter.Body.setStatic(packageBody, false);
    }
    drawSprites();

}