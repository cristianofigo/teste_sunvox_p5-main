function setup() {
    canvas = createCanvas(windowWidth, 100);
    canvas.position(200,0);
    //canvas.position(0, 0);
    //canvas.style('zdex', '-1');
    
    colorMode(HSB, 360);
    
    textAlign(CENTER);
    background("#7FFFD400");
    //samp.autostart = true;
               
    } 
  
  function draw(){
    fill(200, 100, 0, 50);
    let rnd = random(50);
    ellipse(mouseX, mouseY, rnd, rnd);
    background("#7FFFD403");
    
  }