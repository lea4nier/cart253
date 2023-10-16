/**
 * Jack-O-Lantern Builder!
 * Léa Fournier
 * 
 * A game to decorate your own Jack-O-Lantern! 
 * All of the decorations (eyes, noses, and mouths) were drawn by me. :)
 */

"use strict";

let cat2; 
let banner;
let banner2; 
let instructions1;
let pumpkin;

let eyea;
let eyeb; 


// to check if any obj is being dragged
let objisbeingdragged =false;

let eyea_obj = {
    x:0,
    y:0,
    w:100,
    h:50
};

let eyeb_obj = {
    x: 0,
    y: 100, 
    w: 100, 
    h: 50
}

let objBeingDragged = {
    x:0,
    y:0,
    w:0,
    h:0
}

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the object?

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset

let state = "title"; 

/**
 preload images 
*/
function preload() {
    cat2 = loadImage('assets/images/cat2.png');
    banner = loadImage('assets/images/banner.png');
    banner2 = loadImage('assets/images/banner2.png');
    instructions1 = loadImage('assets/images/instructions.png');
    pumpkin = loadImage('assets/images/pumpkin.png');
    eyea = loadImage('assets/images/eyea.png');
    eyeb = loadImage('assets/images/eyeb.png');
}


/**
 * creating canvas
 * I made it small to resemble kids games I used to play :) 
*/
function setup() {
createCanvas(500,500); 
}


/**
 * Description of draw()
*/
function draw() {
background(161, 13, 224);
  
    if (state === `title`) {
        title();
      }

    else if (state === 'instructions') {
        instructions();
      }
    
      else if (state === 'game') {
        game();
      }
}

function title(){
    image(cat2, 80, 80, 420, 370);
    image(banner, 100, 50, 300, 300);
    image(banner2, 100, 320, 300, 300);
}

function keyPressed() {
    if (keyCode === 13)
    state = 'instructions'; 
}

function instructions(){
    image(instructions1, 0, 0, 500, 500); 
}

function mousePressed() {
    if (state === `instructions`) {
        state = `game`;
    }
if(state ===`game`){
    if(objisbeingdragged ===false){
    if (mouseX > eyea_obj.x && mouseX < eyea_obj.x + eyea_obj.w && mouseY > eyea_obj.y && mouseY < eyea_obj.y + eyea_obj.h) {
        dragging = true;
        objisbeingdragged =true;
        console.log("over a")
        // assign the properties of eye_a to objBeingDragged
        objBeingDragged = eyea_obj;


        console.log(objBeingDragged)
      } else if(mouseX > eyeb_obj.x && mouseX < eyeb_obj.x + eyeb_obj.w && mouseY > eyeb_obj.y && mouseY < eyeb_obj.y + eyeb_obj.h) {
         dragging = true;
         objisbeingdragged =true;
         console.log("over b")
          // assign the properties of eye_b to objBeingDragged
         objBeingDragged = eyeb_obj;
         console.log(objBeingDragged)
      }
    }
}
           
}

function game(){
    image(pumpkin, 60, 80, 400, 250);
    
    if(objisbeingdragged===true){
    if (mouseX > objBeingDragged.x && mouseX < objBeingDragged.x + objBeingDragged.w && mouseY > objBeingDragged.y && mouseY < objBeingDragged.y + objBeingDragged.h) {
       rollover = true;
      
    }

     else {
        rollover = false;
        console.log("no rollover")
     }
    }

    
      if (dragging) {
       objBeingDragged.x = mouseX-objBeingDragged.w/2;
       objBeingDragged.y = mouseY-objBeingDragged.h/2;

        }
    
    stroke(0);
    image(eyea, eyea_obj.x, eyea_obj.y, eyea_obj.w, eyea_obj.h);
    image(eyeb, eyeb_obj.x, eyeb_obj.y, eyeb_obj.w, eyeb_obj.h); 
 

        

}

function mouseReleased() {
    // Quit dragging
    dragging = false;
    objisbeingdragged =false;
  }
