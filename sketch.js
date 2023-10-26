//var nms = sv_get_number_of_modules;
//let linha = sv_get_current_line(0);

function preload() {
  font1 = loadFont('MigaeSemibold-3zd2M.otf');
  //font2 = loadFont('IndieFlower-Regular.ttf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
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
  cube(75,90);
  cube(100,0);
  cube(150,190);
  cube(200,255);
  cube(275,0);

    }
  }

function circulos(){
    rotateX(90)
  
  let sRad = 480
  let its = 48
  
  for (let i = 0; i < its; i++) {
    
    let inc = 360 / its  
    t = frameCount/10
  
    let rad = map(cos(t + inc *i), -1, 1, 0, sRad)
    let z = map(cos(90 + t + inc * i), -1, 1, -sRad/2, sRad/2)
    
    push()
      translate(0, 0, z)
      ellipse(0, 0, rad, rad, 50)
    pop()
  }
}

function cube(size,color) {
  push();
  noFill();
  //small box
  stroke(color);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  box(size,size,size);
      pop();
}
