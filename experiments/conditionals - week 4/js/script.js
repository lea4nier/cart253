/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
function setup() {
    createCanvas(500,500);
  }
  
function draw() {
    // No background() so we can see it building up
  
    // Draw a line from the previous to the current mouse position
    // if the mouse is pressed
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }