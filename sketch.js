let angle=0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  }

function draw() {
  
  background(0);
if (sv_get_current_line(0) >= 20 && sv_get_current_line(0) < 100 ){
        background (200, 0, 0, 100);
        retang();
    }
    else{
        background(0, 220, 0, 100);
      triang();
 

    }

}

function retang(){
  push();
 translate(200,200)
  rotate(45)
  rotate(angle);
  noFill()
  stroke(255)
  rectMode(CENTER)
  rect(0,0,50,50)
  rect(0,0,40,40)
  rect(0,0,30,30)
  rect(0,0,20,20)
  angle=angle+1
  }


function triang(){
  background('#0038B9');
  for (let x = 0 - size; x < width + size; x += size) {
    for (let y = 0 - size; y < height + size; y += size) {
      push();
      translate(x, y);
      rotate(angle);
      fill(255, 170, 0, 200);
      triangle(0, 0, size, 0, 0, size);
      pop();
      push();
      translate(x, y);
      rotate(-angle);
      fill(255, 120, 0, 1200);
      triangle(size, size, size, 0, 0, size);
      pop();
      angle += 0.004;
    }
  }
}
