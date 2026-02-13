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

}

function draw(){
    background(0);
    if(path.y > height){
        path.y = height/2
    }
    drawSprites();
}