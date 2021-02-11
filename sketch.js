var tom , tomRestiingImage,tomStandingImage,TomWalkingImage
var jerry , jerryTeasingImage , jerryWalkingImage, jerryFindingImage
var garden , gardenImage

function preload() {
    //load the images" here
tomRestingImage = loadAnimation("images/cat1.png")
tomStandingImage = loadAnimation("images/cat4.png")
tomWalkingImage = loadAnimation("images/cat2.png","images/cat3.png")

jerryWalkingImage = loadAnimation("images/mouse1.png")
jerryFindingImage = loadAnimation("images/mouse4.png")
jerryTeasingImage = loadAnimation("images/mouse2.png","images/mouse3.png")
gardenImage = loadImage("images/garden.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 garden= createSprite(500,400,100,100);
 garden.addImage(gardenImage)

 tom= createSprite(700,600,10,10);
tom.addAnimation("Tom_resting",tomRestingImage)
tom.scale = 0.2


jerry = createSprite(150,600,10,10);
jerry.addAnimation("jerry_Standing",jerryWalkingImage)
jerry.scale = 0.1
}



function draw() {

    background(255);
    
    if(tom.isTouching(jerry)){
     tom.velocityX = 0;
        tom.addAnimation("tom_Standing",tomStandingImage)
        tom.changeAnimation("tom_Standing")
        jerry.addAnimation("finding_Image",jerryFindingImage)    
        jerry.changeAnimation("finding_Image")
       
    }

        jerry.setCollider("rectangle",-300,10,0,100);
        jerry.debug = true;


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX= -5 
tom.addAnimation("cat_Running",tomWalkingImage)
tom.changeAnimation("cat_Running",tomWalkingImage)
 jerry.scale = 0.1
}



}
