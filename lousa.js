function setup(){
  createcanvas(400,400);
  backgroud(black);
}

function draw() {
  stroke("blue");
fill("red");
  
if(mouselspressed){
  rect(mouseX, mouseY,20,35);
}
}
