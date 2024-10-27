let strings = "";
let idx;
let xpos;
let ypos;

function preload() {
  strings = loadStrings("../textstring.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(10);
  textAlign(LEFT, CENTER);
  xpos = 20;
  ypos = 60;
  idx = -1;
}

function draw() {
  string = strings[0];
  let words = string.split(" ");
  idx++;

  let red = map(idx, 0, words.length, 0, 255);
  let green = map(idx, 0, words.length, 186, 255);
  fill(red, green, 255);

  let tSize = map(idx, 0, words.length, 80, 0);
  textSize(tSize);

  let wordWidth = textWidth(words[idx]);

  text(words[idx], xpos, ypos);

  xpos = xpos + wordWidth + textWidth(" ");
  let nextWordWidth = textWidth(words[idx + 1]) || 0;

  if (xpos > width - nextWordWidth) {
    ypos += 65;
    xpos = 20;
  }

  if (idx == words.length) {
    setup();
  }
}
