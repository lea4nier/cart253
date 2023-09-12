/**
 * drawing an alien - Week 2
 * Léa Elizabeth Fournier
 * 
 * 
 */



/**
// draw the background 
*/
function setup() {
createCanvas(640, 480); 
background(255, 201, 214);
noStroke(); 

//draw the body
fill(138, 132, 134);
ellipse(320, 480, 300, 200); 

//draw the head
fill(125, 120, 122); 
ellipse(320, 240, 250, 400);

//draw the eyes
fill(15, 15, 15);
ellipse(250, 240, 80, 250);
ellipse(390, 240, 80, 250);

//add pupils
fill(222, 7, 250);
ellipse(250, 240, 20, 180);
ellipse(390, 240, 20, 180);

//draw the nostrils
fill(15, 15, 15);
ellipse(300, 350, 10, 10);
ellipse(340, 350, 10, 10);

//draw the mouth
fill(15, 15, 15);
stroke(7, 250, 64);
strokeWeight(4); 
rectMode(CENTER); 
rect(320, 390, 100, 25);
}


/**
 * Description of draw()
*/
function draw() {

}