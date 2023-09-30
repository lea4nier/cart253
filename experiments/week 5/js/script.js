/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  parallels(0, 200, 100, 1, 100, 4);
  parallels(0, 300, 20, 10, 50, 12);
  parallels(0, 350, 80, 5, 5, 6);
}

function parallels(x, y, numLines, lineThickness, lineHeight, lineSpacing) {
  for (let i = 0; i < numLines; i++) {
    noStroke();
    let lineFill = map(i, 0, numLines, 0, 255);
    fill(lineFill);
    rectMode(CENTER);
    rect(x, y, lineThickness, lineHeight);
    x = x + lineSpacing;
  }
}