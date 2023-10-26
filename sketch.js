//var nms = sv_get_number_of_modules;
//let linha = sv_get_current_line(0);

function preload() {
  font1 = loadFont('MigaeSemibold-3zd2M.otf');
  //font2 = loadFont('IndieFlower-Regular.ttf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(200,0);
    //canvas.position(0, 0);
    //canvas.style('zdex', '-1');
    
    colorMode(HSB, 360);
    
    textAlign(CENTER);
    background("#7FFFD400");
    //samp.autostart = true;
   // console.log(nms);
  stroke(255, 100)
  strokeWeight(4)
  noFill()
  angleMode(DEGREES)
    } 
  
  function draw(){
    fill(200, 100, 0, 50);
    let rnd = random(50);
    ellipse(mouseX, mouseY, rnd, rnd);
      textFont(font1);
    textSize(16);
    text(sv_get_song_name(0), 150, 30);
    text("BPM:" + sv_get_song_bpm( 0 ), 100, 50);
    text(sv_get_current_line(0), 100, 70);
    //sv_get_song_bpm( 0 )
    background("#7FFFD403");

    if (sv_get_current_line(0) >= 20 && sv_get_current_line(0) < 100 ){
        background (200, 0, 0, 100);
        circulos();
    }
    else{
        background(0, 220, 0, 100);
      cube(50,255);
  cube();

    }
  }

function circulos(){
    background(240);
  translate(width/2, height/2);

  noFill();
  stroke(0);
  beginShape();
  for (let theta = 0; theta <= 2 * PI; theta += 0.05) {
    vertex( 100 * (1 + pow(cos(theta),2))*sin(theta),
             100 * cos(theta) * pow(sin(theta),2) );
  }
  endShape();
  
  rotate(angle - PI/2);

  noFill();
  ellipse(50, 0, 100, 200)

  noStroke();
  fill('red');
  circle(100 * pow(sin(angle),2), 100 * sin(2*angle), 7);
  
  
    angle += 0.01;
}

function cube() {
   background(0);
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
