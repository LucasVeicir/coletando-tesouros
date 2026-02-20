let path;
let boy;
let cash;
let diamonds;
let jwellery;
let sword;
let pathImg;
let boyImg;
let cashImg;
let diamondsImg;
let jwelleryImg;
let swordImg;
let treasureCollection;
let cashGroup;
let diamondsGroup;
let jwelleryGroup;
let swordGroup;
let endImg;
const PLAY = 1;
const END = 0;
let gameState = PLAY;
let edges;

function preload(){
    pathImg = loadImage("Road.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    cashImg = loadImage("cash.png");
    diamondsImg = loadImage("diamonds.png");
    jwelleryImg = loadImage("jwell.png");
    swordImg = loadImage("sword.png");
    endImg = loadImage("fimdejogo.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    path = createSprite(width /2, 200);
    path.addImage(pathImg);
    path.velocityY = 4;
    boy = createSprite(width /2, height -20);
    boy.addAnimation("run", boyImg);
    boy.scale = 0.1;
    cashGroup = new Group();
    diamondsGroup = new Group();
    jwelleryGroup = new Group();
    swordGroup = new Group();

}

function draw(){
    background(0);
    if(path.y > height){
        path.y = height/2
    }
    boy.x = World.mouseX;
    edges = createEdgeSprites();
    boy.collide(edges);
    createCash();
    createDiamonds();
    createJwellery();

    drawSprites();
}

function createCash(){
    if(World.frameCount % 200 == 0){
        let cash = createSprite(Math.round(random(50,width - 50),40,10,10));
        cash.addImage(cashImg);
        cash.scale = 0.12;
        cash.velocityY = 5;
        cash.lifetime = 5/height;
        cashGroup.add(cash);
    }
}

function createDiamonds(){
    if(World.frameCount % 320 == 0){
        let diamonds = createSprite(Math.round(random(50,width - 50),40,10,10))
        diamonds.addImage(diamondsImg);
        diamonds.scale = 0.03
        diamonds.velocityY = 5;
        diamonds.lifetime = 5/height;
        diamondsGroup.add(diamonds);
    }
}

function createJwellery(){
    if(World.frameCount % 410 == 0){
        let jwellery = createSprite(Math.round(random(50,width - 50),40,10,10));
        jwellery.addImage(jwelleryImg);
        jwellery.scale = 0.13;
        jwellery.velocityY = 5;
        jwellery.lifetime = 5/height;
        jwelleryGroup.add(jwellery);
    }
}