// an array that contains 4 objects with 2 properties each. 

let shapes = [
  { arrow: "↑", word: "up" },
  { arrow: "↓", word: "down" },
  { arrow: "←", word: "left" },
  { arrow: "→", word: "right" },
];

// establishes the size of the grid and the text symbols
let count = 100;
let textsize = 10;

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER, CENTER);
  // slows down the rate at which the shape changes
  frameRate(8);
  print("press the mouse down");
}

function draw() {
  background(0);
  // calculates the size of each shape
  let shapeSize = 1920 / count;
  
  
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      // select a random shape from the array
      let shape = random(shapes);
      // calculate the position of the shape
      let posX = (x + 0.5) * shapeSize;
      let posY = (y + 0.5) * shapeSize;
      // generate a random color value for the shape
      let shapeColor = random(0, 240);
      // calls the drawShape function
      drawShape(posX, posY, shapeSize, shapeColor, shape, mouseIsPressed);
    }
  }
}

// isWord is tied to mouseIsPressed through calling the drawShape function within the two nested for loops. Because mouseIsPressed is a Boolean variable, when the mouse is pressed it makes isWord return true, changing the fill to none and swapping the array to the words.

function drawShape(x, y, shapeSize, shapeColor, shape, isWord) {
  fill(shapeColor * 4, shapeColor, shapeColor + 70);
  noStroke();
  if (!isWord) {
    rect(x - shapeSize / 2, y - shapeSize / 2, shapeSize, shapeSize);
    fill(255);
  }
  textSize(isWord ? textsize / 1.5 : textsize);
  text(isWord ? shape.word : shape.arrow, x, y);
}
