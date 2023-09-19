/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}
let circle1 = {
    x: 0,
    y: 400,
    size: 100,
    growthRate: 1,
    speed: 1, 
    alpha: 200
  };

let circle2 = {
    x: 500,
    y: 250,
    size: 75,
    sizeRatio: 0.5,
    speed: -1,
    fill: 255,
    alpha: 200
  };

//let speedX = 1;
//let speedY = 1;
//let speedX = 1; 
//let x = 1;
//let speed = 1;
/**
 * Description of setup
*/
function setup() {
createCanvas (500,500)
}


/**
 * Description of draw()
*/
function draw() {
  // Left circle
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + circle1.growthRate;
  circle1.size = constrain(circle1.size,0,width);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

  // Right circle
  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(circle2.fill,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);
   
    // x += speed;
   // if(x < 0 || x > width){
   //    speed *= -1;
    }
 
   // line(-250, 160, 250, height); 
//line(250 + speedX, 55 + speedY, 250 + speedX, 50 + speedY,);
//speedX++;
//speedY += 0;
//triangle(100 + speedX, 55 + speedY, 28 + speedX, 0 + speedY, 56 + speedX, 55 + speedY);
    //speedX++;
   // speedY += 0;
    
//make it red 
    fill(random(255), random(255), random(255));
    frameRate(1);
stroke(0,0,0,0); 

//draw heart
rect(335, 255, 5, 40)
rect(325, 250, 10, 60);
rect(320, 250, 15, 60);
rect(310, 245, 15, 80);
rect(295, 240, 15, 95);
rect(280, 240, 15, 100);
rect(265, 245, 15, 105);
rect(250, 250, 15, 105);
rect(235, 245, 15, 105); 
rect(220, 240, 15, 100);
rect(205, 240, 15, 95);
rect(190, 245, 15, 80);
rect(185, 250, 5, 60); 
rect(180, 250, 5, 60);
rect(175, 255, 5, 40);
}




