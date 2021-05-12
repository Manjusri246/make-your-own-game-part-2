var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20;
 beeimg,bee
function preload(){
beeimg=loadImage("bee.png")


}


function setup() {
  createCanvas(1000,1100);
 m1= createSprite(126,58,10,140);
 m2= createSprite(90,245,300,10);
 m3= createSprite(245,185,10,130);
 m4= createSprite(540,190,600,10);
 m5= createSprite(377,40,10,100);
 m6= createSprite(630,150,10,90);
 m7= createSprite(680,100,320,10);
 m8= createSprite(845,185,10,180);
 m9= createSprite(735,245,10,100);
 m10= createSprite(380,240,10,110);
 m11= createSprite(430,290,100,10);
 mm12= createSprite(245,185,10,130);
 m13= createSprite(133,300,10,100);

 m3= createSprite(245,185,10,130);
 m3= createSprite(245,185,10,130);
 m3= createSprite(245,185,10,130);
 m3= createSprite(245,185,10,130);
 m3= createSprite(245,185,10,130);
 m3= createSprite(245,185,10,130);














 bee=createSprite(50,60,5,5)
bee.addImage(beeimg)
bee.scale=0.15
}

function draw() {
  background(230, 203, 174);  
  textSize(30)
  text("x "+ mouseX + ",y"+ mouseY,500,500)
  drawSprites();
}