var garden, gardenImg;
var cat, catImg1, catImg2, catImg3;
var rat, ratImg1, ratImg2, ratImg3;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    ratImg1 = loadImage("images/mouse1.png");
    ratImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat = createSprite(850,670,60,60);
    cat.addImage(catImg1);
    cat.scale = 0.23;

    rat = createSprite(190,680,30,30);
    rat.addImage(ratImg1);
    rat.scale = 0.18;

}

function draw() {

    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide

    if (cat.x < 270) {

        cat.collide(rat);

        cat.velocityX = 0;
        cat.x = 300;
        cat.y = 670;
        cat.addImage("stay", catImg3);
        cat.changeImage("stay");

        rat.x = 190
        rat.y = 680;
        rat.addImage("search", ratImg3);
        rat.changeImage("search");
    }  

    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW) {
      rat.addAnimation("mouseTeasing", ratImg2);
      rat.changeAnimation("mouseTeasing"); 
      rat.frameDelay = 25;     
    }

  if (keyCode === LEFT_ARROW) {
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning"); 
      cat.velocityX = -2;
      cat.frameDelay = 25;   
    }

}

