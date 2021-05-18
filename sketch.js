var boy,boyImg;

var dog,dogImg;

var backGround,backImg;

var invisibleGround;

var waterPump,waterPumpImg,waterPumpGroup;

var tyres,tyresImg,tyresGroup;

var bench,benchImg,benchGroup;

var popSound,jumpSound;

var bBallon,bBallonImg,bBallonGroup;

var rBallon,rBallonImg,rBallonGroup;

var gBallon,gBallonImg,gBallonGroup;

var yBallon,yBallonImg,yBallonGroup;

var pBallon,pBallonImg,pBallonGroup;

var font;

var score = 0;

function preload(){
boyImg = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png");

dogImg = loadAnimation("dog1s.png","dog2s.png","dog3s.png","dog4s.png");

backImg = loadImage("back11.png");

font = loadFont("FEASFBRG.TTF");

waterPumpImg = loadImage("obs1.png");
tyresImg = loadImage("obs2.png");
benchImg = loadImage("obs3.png");

popSound = loadSound("pop.mp3");
jumpSound = loadSound("jump.mp3");

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    backGround = createSprite(width/2 + 460,windowHeight/2);
    backGround.addImage(backImg);
    backGround.scale = 0.7;

    boy = createSprite(windowWidth/2 - 200,windowHeight/2+250);
    boy.addAnimation("boyI",boyImg);
    boy.scale = 1.95;

    dog = createSprite(windowWidth/2 - 400,windowHeight/2+280);
    dog.addAnimation("dogI",dogImg);
    dog.scale = 1.2;

    invisibleGround = createSprite(windowWidth/2,windowHeight/2 + 340,width,20);
    invisibleGround.visible = false;

    waterPumpGroup = createGroup();
    tyresGroup = createGroup();
    benchGroup = createGroup();

    bBallonGroup = createGroup();
    rBallonGroup = createGroup();
    gBallonGroup = createGroup();
    yBallonGroup = createGroup();
    pBallonGroup = createGroup();

  }
  
  function draw() {
    background(220);
    
    score = score + Math.round(getFrameRate()/60);

    backGround.velocityX = -15;

    if(backGround.x < windowWidth/2-450){
        backGround.x = windowWidth/2 + 460;
    }   

    if(keyDown("space") && boy.y >= windowHeight/2 + 230){
        boy.velocityY = -26.3;
        jumpSound.play();
    }

    boy.velocityY = boy.velocityY + 1;

    boy.collide(invisibleGround);
    dog.collide(invisibleGround);
    
    spawnBench();
    spawnTyres();
    spawnWaterPump();

    spawnbBallon();
    spawnrBallon();
    spawngBallon();
    spawnyBallon();
    spawnpBallon();

    drawSprites();

    textFont(font);
    fill("red");
    textSize(45);
    text("SCORE : " + score,windowWidth/2-950,windowHeight/2 - 410);

  }

  function spawnBench(){
      
  }

  function spawnTyres(){
      
}

function spawnWaterPump(){
      
}

function spawnbBallon(){

}

function spawnrBallon(){
  
}

function spawngBallon(){
  
}

function spawnyBallon(){
  
}

function spawnpBallon(){
  
}


