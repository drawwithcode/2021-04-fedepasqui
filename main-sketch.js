let cover1;
let cover2;
let cover3;
let cover4;
let cover5;
const urlString = window.location.href;
let url = new URL(urlString);

function preload() {
  cover1 = loadImage("assets/orange-girl.jpeg");
  cover2 = loadImage("assets/siddharta.jpeg");
  cover3 = loadImage("assets/80-days.jpeg");
  cover4 = loadImage("assets/great-gatsby.jpeg");
  cover5 = loadImage("assets/pride-prejudice.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FFFEEF");
  textFont("IBM Plex Mono");
  textSize(40);
  text("The inspiration for your next parentpiece.", 100, windowHeight / 2);

  image(cover1, 100, 70, width / 10, height / 3.5);
  image(cover2, 500, 30, width / 10, height / 3.5);
  image(cover3, 1050, 105, width / 10, height / 3.5);
  image(cover4, 400, 500, width / 10, height / 3.5);
  image(cover5, 900, 450, width / 10, height / 3.5);

  // image(cover1, 100, 70, width / 10, height / 3.5);
  // image(cover2, 400, 500, width / 10, height / 3.5);
  // image(cover3, 800, 400, width / 10, height / 3.5);
  // image(cover4, 500, 30, width / 10, height / 3.5);
  // image(cover5, 1000, 110, width / 10, height / 3.5);
}

function draw() {
  textFont("IBM Plex Mono");
  textSize(26);
  text("Click a cover and look for the red word", 100, 430);
}

// function mousePressed() {
//   cover1.clicked();
// }
// function mouseClicked() {
//   window.open(url + "orange-girl.html?count=" + frameCount, "_self");
// }

//click copertine per aprire pagine html
function mousePressed() {
  if (dist(mouseX, mouseY, 150, 120) < 100) {
    window.open(url + "orange-girl.html?count=" + frameCount, "_self");
  } else if (dist(mouseX, mouseY, 500, 560) < 100) {
    window.open(url + "great-gatsby.html?count=" + frameCount, "_self");
  } else if (dist(mouseX, mouseY, 900, 500) < 100) {
    window.open(url + "pride-prejudice.html?count=" + frameCount, "_self");
  } else if (dist(mouseX, mouseY, 600, 150) < 100) {
    window.open(url + "siddhartha.html?count=" + frameCount, "_self");
  } else if (dist(mouseX, mouseY, 1000, 250) < 100) {
    window.open(url + "80-days.html?count=" + frameCount, "_self");
  }
}
