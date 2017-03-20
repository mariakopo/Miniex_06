//A color
var song;

function setup() {

  createCanvas(500, 500);
  fill(100, 200, 300);
  noStroke();
  rectMode(CENTER);
  frameRate(random);
  noiseDetail(3, 1);
//Sang
  song = loadSound('assets/FrankOcean.mp3');


}

function draw() {
  background(255);
  for (var x = 10; x < width; x += 10) {
    for (var y = 10; y < height; y += 10) {
      var n = noise(x * 0.005, y * 0.005, frameCount * 0.05);
      push();
      translate(x, y);
      rotate(TWO_PI * n);
      scale(12 * n);
      rect(0, 0, 1, 1);
      pop();
    }
  }

}

function mousePressed() {
 if (song.isPlaying()) {
   song.stop();
   fill(random(0), random(50), random(350));
 }else{
   song.play();
   fill(0, 51, 204);
  }
 }
