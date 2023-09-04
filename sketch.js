//var nms = sv_get_number_of_modules;
function setup() {
    canvas = createCanvas(windowWidth, 100);
    canvas.position(200,0);
    //canvas.position(0, 0);
    //canvas.style('zdex', '-1');
    
    colorMode(HSB, 360);
    
    textAlign(CENTER);
    background("#7FFFD400");
    //samp.autostart = true;
   // console.log(nms);
               
    } 
  
  function draw(){
    fill(200, 100, 0, 50);
    let rnd = random(50);
    ellipse(mouseX, mouseY, rnd, rnd);
    textSize(16);
    text(sv_get_song_name(0), 150, 30);
    text("BPM:" + sv_get_song_bpm( 0 ), 100, 50);
    //sv_get_song_bpm( 0 )
    background("#7FFFD403");
    
  }