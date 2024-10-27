let strings = "";


function preload() {
  strings = loadStrings("../textstring.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  frameRate(5);
}

function draw() {

  string = strings[0];

  let words = string.split(" ");

  let xpos = 20;
  let ypos = height/2;
  textSize(30);

  for(idx = 0; idx < words.length; idx++) {

    let wordWidth = textWidth(words[idx]);

    text(words[idx], xpos, ypos);

    if (words[idx] == "Cathy") {
      textSize(12);
    } else {
      textSize(30);
    }

    xpos = xpos + wordWidth + textWidth(" ");

    let nextWordWidth = textWidth(words[idx + 1]) || 0

    if (xpos > width - nextWordWidth) {
      ypos += 40;
      xpos = 20;
    }
  }
}
