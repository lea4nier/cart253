/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  move(); // Call our move function so the circle position is updates
  wrap(); // Call our wrap function so the circle moves back to the left if it reaches the right
  display(); // Call our display function so the circle is displayed
}

// Defining our move function
function move() {
  circle.x = circle.x + circle.vx;
  circle.x = circle.x + circle.vy;
}

// Defining our wrap function
function wrap() {
  if (circle.x > width) {
    reset();
  }
}

// Defining our reset function
function reset() {
  circle.x = 0;
  circle.vx = circle.vx + 1;
  circle.size = circle.size + 5;
}

// Defining our display function
function display() {
  fill(255,0,0);
  ellipse(circle.x, circle.y, circle.size);
}

function mousePressed() {
  // CALLING reset()
  reset();
}