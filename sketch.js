let imgArrays = [];
let w = 1920;
let h = 1080;
let ratio = h/w;
let numTotalImgs = 105;
let wPerImg = w / numTotalImgs;

function preload() {

}

function setup() {
    for (let i = 1; i <= numTotalImgs; i++) {
        let img = loadImage('export/'+ i + '.jpg');
        imgArrays.push(img);
        }
  createCanvas(w, h);
}

function draw() {
  // background(220);
  if (frameCount == 10) {
    resizeCanvas(windowWidth, windowWidth * ratio);
    wPerImg = width / numTotalImgs;
  }
  let mappedIdx = constrain(floor(mouseX / wPerImg), 0, numTotalImgs-1);
  image(imgArrays[mappedIdx], 0, 0, width, height);
//   console.log("hey")
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth * ratio);
  wPerImg = windowWidth / numTotalImgs;
}

