var cnv;
let bckgrndimg;
let mic;
let karaokeImg0;
let karaokeImg1;
let karaokeImg2
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
  bckgrndimg = loadImage("assets/karaokeNoSound.png");
  karaokeImg0 = loadImage("assets/karaoke0.png");
  karaokeImg1 = loadImage("assets/karaoke1.png");
  karaokeImg2 = loadImage("assets/karaoke2.png");
  karaokeImg3 = loadImage("assets/karaoke3.png");
  karaokeImg4 = loadImage("assets/karaoke4.png")
}

function setup() {
  cnv = createCanvas(1000, 800);
  centerCanvas();
  imageMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(60);
  image(bckgrndimg,500,400);

  let micLevel = mic.getLevel();
    if(micLevel > .05 && micLevel < .10){
      firstVol();
    }else if (micLevel > .10 && micLevel < .15){
      secVol();
    }else if (micLevel >.15 && micLevel < .20){
      thirdVol();
    }else if (micLevel >.21 && micLevel <.25){
      fourthVol();
    }else if (micLevel >.25 && micLevel <.30){
      fithVol();
    }
}

function firstVol() {
  image(karaokeImg0,500,400);
}

function secVol() {
  image(karaokeImg1,500,400);
}

function thirdVol() {
  image(karaokeImg2,500,400);
}

function fourthVol() {
  image(karaokeImg3,500,400);
}

function fifthVol() {
  image(karaokeImg4,500,400);
}