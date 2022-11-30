var cnv;
let bgImg;
let jingle = [];
let drum
let capture;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload(){
  bgImg = loadImage("assets/caroling.png");
  soundFormats('wav');
  for (let i = 0; i < 3; i++){
  jingle[i] = loadSound("assets/jingle.wav");
  }
  drum = loadSound("assets/drum.wav");
}
function setup() {
  cnv = createCanvas(1100, 800);
  capture = createCapture(AUDIO);
  cnv.mousePressed();
  centerCanvas();
}

function draw() {
  background(75, 139, 59);
  image(bgImg,0,0);
  image(capture,500,100);
}

function mouseMoved() {
  if(jingle[0].isPlaying()==false){
    jingle[0].play();
  } else if (jingle[1].isPlaying()==false){
    jingle[1].play();
  } else if (jingle[2].isPlaying()==false){
    jingle[2].play();
  }
}

function mousePressed() {
  drum.play();
}
