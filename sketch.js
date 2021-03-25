var wall;
function setup() {
  createCanvas(displayWidth-10,displayHeight-10);
 // createSprite(400, 200, 50, 50);
 line1 = createSprite(100,150,10,150);
 line1.shapeColor = "blue";
 line2 = createSprite(200,230,207,10);
 line2.shapeColor = "blue";
 line3 = createSprite(300,260,10,50);
 line3.shapeColor = "blue";
 line4 = createSprite(200,290,207,10);
 line4.shapeColor = "blue";
 line5 = createSprite(200,350,207,10);
 line5.shapeColor = "blue";
 line6 = createSprite(300,380,10,50);
 line6.shapeColor = "blue";
 line7 = createSprite(200,410,207,10);
 line7.shapeColor = "blue";
 line8 = createSprite(100,490,10,150);
 line8.shapeColor = "blue";
 line9 = createSprite()

}

function draw() {
  background("black");  
  drawSprites();
}