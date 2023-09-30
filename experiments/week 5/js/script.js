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
  parallels(100, 200);
  parallels(200, 100);
  parallels(200, 300);
}

// Defining the function
function parallels(x,y) {
  // We don't need to declare x and y now because they are provided as parameters
  for (let i = 0; i < 20; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    // We can still use x and y as variables
    rect(x, y, 2, 50);
    // Including changing x inside our loop
    x = x + 5;
  }
}