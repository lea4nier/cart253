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

let eyetitle;
let mouthtitle;
let nosetitle; 

let eyea;
let eyeb; 
let eyec;

let mouth1; 
let mouth2;
let mouth3;
let mouth4; 

let nose1;
let nose2;
let nose3; 



// to check if any obj is being dragged
let objisbeingdragged =false;

let eyea_obj = {
    x:3,
    y:70,
    w:100,
    h:50
};

let eyeb_obj = {
    x: 3,
    y: 140, 
    w: 100, 
    h: 50
}

let eyec_obj = {
    x: 3,
    y: 210, 
    w: 100, 
    h: 50
}

let nose1_obj = {
    x:420,
    y:70,
    w:30,
    h:15
};

let mouth1_obj = {
    x: 10,
    y: 410, 
    w: 100, 
    h: 50
}

let mouth2_obj = {
    x: 140,
    y: 410, 
    w: 100, 
    h: 50
}

let mouth3_obj = {
    x: 260,
    y: 410, 
    w: 100, 
    h: 50
}

let mouth4_obj = {
    x: 380,
    y: 410, 
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
    eyetitle = loadImage ('assets/images/eyetitle.png');
    eyea = loadImage('assets/images/eyea.png');
    eyeb = loadImage('assets/images/eyeb.png');
    eyec = loadImage('assets/images/eyec.png');
    mouthtitle = loadImage ('assets/images/mouthtitle.png');
    mouth1 = loadImage ('assets/images/mouth1.png');
    mouth2 = loadImage ('assets/images/mouth2.png');
    mouth3 = loadImage ('assets/images/mouth3.png');
    mouth4 = loadImage ('assets/images/mouth4.png');
    nosetitle = loadImage ('assets/images/nosetitle.png');
    nose1 = loadImage ('assets/images/nose1.png');
}


/**
 * creating canvas
 * I made it small to resemble kids games I used to play :) 
*/
function setup() {
createCanvas(500,500); 
}


/**
 * setting up purple background and different states
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

function title(){         //title screen with cat 
    image(cat2, 80, 80, 420, 370);
    image(banner, 100, 50, 300, 300);
    image(banner2, 100, 320, 300, 300);
}

function keyPressed() {     //user presses "enter" to continue to next state
    if (keyCode === 13)
    state = 'instructions'; 
}

function instructions(){        //instructions state, I drew the image myself
    image(instructions1, 0, 0, 500, 500); 
}

function mousePressed() {       //state changes to game when user presses mouse
    if (state === `instructions`) {
        state = `game`;
    }

if(state ===`game`){
    if(objisbeingdragged ===false){
    if (mouseX > eyea_obj.x && mouseX < eyea_obj.x + eyea_obj.w && mouseY > eyea_obj.y && mouseY < eyea_obj.y + eyea_obj.h) {
        dragging = true;   //eyea can be dragged
        objisbeingdragged =true;
        // assign the properties of eye_a to objBeingDragged
        objBeingDragged = eyea_obj;

        console.log(objBeingDragged)
      } else if(mouseX > eyeb_obj.x && mouseX < eyeb_obj.x + eyeb_obj.w && mouseY > eyeb_obj.y && mouseY < eyeb_obj.y + eyeb_obj.h) {
         dragging = true;   //eyeb can be dragged
         objisbeingdragged =true;
          // assign the properties of eye_b to objBeingDragged
         objBeingDragged = eyeb_obj;
      
        } else if(mouseX > eyec_obj.x && mouseX < eyec_obj.x + eyec_obj.w && mouseY > eyec_obj.y && mouseY < eyec_obj.y + eyec_obj.h) {
        dragging = true;    //eyec can be dragged
        objisbeingdragged =true;
         // assign the properties of eye_c to objBeingDragged
        objBeingDragged = eyec_obj;
      } else if(mouseX > mouth1_obj.x && mouseX < mouth1_obj.x + mouth1_obj.w && mouseY > mouth1_obj.y && mouseY < mouth1_obj.y + mouth1_obj.h) {
        dragging = true;    //mouth1 can be dragged
        objisbeingdragged =true;
         // assign the properties of mouth1 to objBeingDragged
        objBeingDragged = mouth1_obj;
      }else if(mouseX > mouth2_obj.x && mouseX < mouth2_obj.x + mouth2_obj.w && mouseY > mouth2_obj.y && mouseY < mouth2_obj.y + mouth2_obj.h) {
        dragging = true;    //mouth2 can be dragged
        objisbeingdragged =true;
         // assign the properties of mouth2 to objBeingDragged
        objBeingDragged = mouth2_obj;
      }else if(mouseX > mouth3_obj.x && mouseX < mouth3_obj.x + mouth3_obj.w && mouseY > mouth3_obj.y && mouseY < mouth3_obj.y + mouth3_obj.h) {
        dragging = true;    //mouth3 can be dragged
        objisbeingdragged =true;
         // assign the properties of mouth3 to objBeingDragged
        objBeingDragged = mouth3_obj;
      }else if(mouseX > mouth4_obj.x && mouseX < mouth4_obj.x + mouth4_obj.w && mouseY > mouth4_obj.y && mouseY < mouth4_obj.y + mouth4_obj.h) {
        dragging = true;    //mouth4 can be dragged
        objisbeingdragged =true;
         // assign the properties of mouth4 to objBeingDragged
        objBeingDragged = mouth4_obj;
      }else if(mouseX > nose1_obj.x && mouseX < nose1_obj.x + nose1_obj.w && mouseY > nose1_obj.y && mouseY < nose1_obj.y + nose1_obj.h) {
        dragging = true;    //nose1 can be dragged
        objisbeingdragged =true;
         // assign the properties of mouth1 to objBeingDragged
        objBeingDragged = nose1_obj;
      }
    }
}
           
}

function game(){
    image(pumpkin, 60, 80, 400, 250);
    image(eyetitle, 10, 10, 100, 50);
    image(mouthtitle, 200, 310, 100, 50);
    image(nosetitle, 387, 10, 100, 50);

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
    image(eyec, eyec_obj.x, eyec_obj.y, eyec_obj.w, eyec_obj.h); 
    image(mouth1, mouth1_obj.x, mouth1_obj.y, mouth1_obj.w, mouth1_obj.h); 
    image(mouth2, mouth2_obj.x, mouth2_obj.y, mouth2_obj.w, mouth2_obj.h); 
    image(mouth3, mouth3_obj.x, mouth3_obj.y, mouth3_obj.w, mouth3_obj.h); 
    image(mouth4, mouth4_obj.x, mouth4_obj.y, mouth4_obj.w, mouth4_obj.h);
    image(nose1, nose1_obj.x, nose1_obj.y, nose1_obj.w, nose1_obj.h);  

}

function mouseReleased() {
    // Quit dragging
    dragging = false;
    objisbeingdragged =false;
}