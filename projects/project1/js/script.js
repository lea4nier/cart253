/**
 * Jack-O-Lantern Builder!
 * Léa Fournier
 * 
 * Happy Halloween! This is a game to decorate your own Jack-O-Lantern! 
 * All of the decorations (eyes, noses, and mouths) were drawn by me. :)
 */

"use strict";
//declare variables
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

let done;
let ending;  

let sound; 
let c; 


// to check if any obj is being dragged
let objIsBeingDragged =false;

//declare objects
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
    y:100,
    w:30,
    h:15
};

let nose2_obj = {
    x:420,
    y:170,
    w:30,
    h:15
};

let nose3_obj = {
    x:420,
    y:240,
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

let done_obj = {
   x:200, 
   y:10, 
   w:100, 
   h:50
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
    nose2 = loadImage ('assets/images/nose2.png');
    nose3 = loadImage ('assets/images/nose3.png');
    done = loadImage ('assets/images/done.png');
    ending = loadImage('assets/images/ending.png');

    sound = loadSound('assets/sounds/sound.mp3');
}


/**
 * creating canvas
 * I made it small to resemble kids games I used to play :) 
*/
function setup() {
createCanvas(500,500); //naming variable so that image can be saved later
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
      else if (state === 'end') {
        game();
        end(); 
      }
}

function title(){         //title screen with cat 
    image(cat2, 80, 80, 420, 370);
    image(banner, 100, 50, 300, 300);
    image(banner2, 100, 320, 300, 300);
}

function keyPressed() {     //user presses "enter" to continue to next state
    if (keyCode === 13){
    state = 'instructions'; 
    sound.loop();   //loop sound
    }
}

function instructions(){        //instructions state, I drew the image myself
    image(instructions1, 0, 0, 500, 500); 
}

function mousePressed() {       //state changes to game when user presses mouse
    if (state === `instructions`) {
        state = `game`;
    }

if(state ===`game`){
    if(objIsBeingDragged ===false){
    if (mouseX > eyea_obj.x && mouseX < eyea_obj.x + eyea_obj.w && mouseY > eyea_obj.y && mouseY < eyea_obj.y + eyea_obj.h) {
        dragging = true;   //eyea can be dragged
        objIsBeingDragged =true;
        // assign the properties of eye_a to objBeingDragged
        objBeingDragged = eyea_obj;

        console.log(objBeingDragged)
      } else if(mouseX > eyeb_obj.x && mouseX < eyeb_obj.x + eyeb_obj.w && mouseY > eyeb_obj.y && mouseY < eyeb_obj.y + eyeb_obj.h) {
         dragging = true;   //eyeb can be dragged
         objIsBeingDragged =true;
          // assign the properties of eye_b to objBeingDragged
         objBeingDragged = eyeb_obj;
      
        } else if(mouseX > eyec_obj.x && mouseX < eyec_obj.x + eyec_obj.w && mouseY > eyec_obj.y && mouseY < eyec_obj.y + eyec_obj.h) {
        dragging = true;    //eyec can be dragged
        objIsBeingDragged =true;
         // assign the properties of eye_c to objBeingDragged
        objBeingDragged = eyec_obj;

      } else if(mouseX > mouth1_obj.x && mouseX < mouth1_obj.x + mouth1_obj.w && mouseY > mouth1_obj.y && mouseY < mouth1_obj.y + mouth1_obj.h) {
        dragging = true;    //mouth1 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth1 to objBeingDragged
        objBeingDragged = mouth1_obj;

      }else if(mouseX > mouth2_obj.x && mouseX < mouth2_obj.x + mouth2_obj.w && mouseY > mouth2_obj.y && mouseY < mouth2_obj.y + mouth2_obj.h) {
        dragging = true;    //mouth2 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth2 to objBeingDragged
        objBeingDragged = mouth2_obj;

      }else if(mouseX > mouth3_obj.x && mouseX < mouth3_obj.x + mouth3_obj.w && mouseY > mouth3_obj.y && mouseY < mouth3_obj.y + mouth3_obj.h) {
        dragging = true;    //mouth3 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth3 to objBeingDragged
        objBeingDragged = mouth3_obj;

      }else if(mouseX > mouth4_obj.x && mouseX < mouth4_obj.x + mouth4_obj.w && mouseY > mouth4_obj.y && mouseY < mouth4_obj.y + mouth4_obj.h) {
        dragging = true;    //mouth4 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth4 to objBeingDragged
        objBeingDragged = mouth4_obj;

      }else if(mouseX > nose1_obj.x && mouseX < nose1_obj.x + nose1_obj.w && mouseY > nose1_obj.y && mouseY < nose1_obj.y + nose1_obj.h) {
        dragging = true;    //nose1 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth1 to objBeingDragged
        objBeingDragged = nose1_obj;
     
     }else if(mouseX > nose2_obj.x && mouseX < nose2_obj.x + nose2_obj.w && mouseY > nose2_obj.y && mouseY < nose2_obj.y + nose2_obj.h) {
        dragging = true;    //nose2 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth2 to objBeingDragged
        objBeingDragged = nose2_obj;
     
     }else if(mouseX > nose3_obj.x && mouseX < nose3_obj.x + nose3_obj.w && mouseY > nose3_obj.y && mouseY < nose3_obj.y + nose3_obj.h) {
        dragging = true;    //nose2 can be dragged
        objIsBeingDragged =true;
         // assign the properties of mouth2 to objBeingDragged
        objBeingDragged = nose3_obj;
     }else if(mouseX > done_obj.x && mouseX < done_obj.x + done_obj.w && mouseY > done_obj.y && mouseY < done_obj.y + done_obj.h) {
        dragging = true;
        objIsBeingDragged =true;
        objBeingDragged = done_obj;  //if obj done is pressed, state changes to "end"
        state = 'end';
     }
    }
 }
           
}

function game(){
    image(pumpkin, 60, 80, 400, 250);   //images of pumpkin and titles appear
    image(eyetitle, 10, 10, 100, 50);
    image(mouthtitle, 200, 310, 100, 50);
    image(nosetitle, 387, 10, 100, 50);

    if(objIsBeingDragged===true){       //objects can be dragged 
    if (mouseX > objBeingDragged.x && mouseX < objBeingDragged.x + objBeingDragged.w && mouseY > objBeingDragged.y && mouseY < objBeingDragged.y + objBeingDragged.h) {
       rollover = true;
      
    }

     else {
        rollover = false;    //images can only be dragged once mouse is rolling over them
     }
    }

    
      if (dragging) {
       objBeingDragged.x = mouseX-objBeingDragged.w/2; //objects dragged in middle of mouse
       objBeingDragged.y = mouseY-objBeingDragged.h/2;

        }
    
    stroke(0);                        //images of decorations appear in "game" state
    image(eyea, eyea_obj.x, eyea_obj.y, eyea_obj.w, eyea_obj.h);
    image(eyeb, eyeb_obj.x, eyeb_obj.y, eyeb_obj.w, eyeb_obj.h); 
    image(eyec, eyec_obj.x, eyec_obj.y, eyec_obj.w, eyec_obj.h); 
    image(mouth1, mouth1_obj.x, mouth1_obj.y, mouth1_obj.w, mouth1_obj.h); 
    image(mouth2, mouth2_obj.x, mouth2_obj.y, mouth2_obj.w, mouth2_obj.h); 
    image(mouth3, mouth3_obj.x, mouth3_obj.y, mouth3_obj.w, mouth3_obj.h); 
    image(mouth4, mouth4_obj.x, mouth4_obj.y, mouth4_obj.w, mouth4_obj.h);
    image(nose1, nose1_obj.x, nose1_obj.y, nose1_obj.w, nose1_obj.h);  
    image(nose2, nose2_obj.x, nose2_obj.y, nose2_obj.w, nose2_obj.h);  
    image(nose3, nose3_obj.x, nose3_obj.y, nose3_obj.w, nose3_obj.h);
    image(done, done_obj.x, done_obj.y, done_obj.w, done_obj.h);  
}

function end(){
    image(ending, 0, 0, 500, 500); //image appears that clears objects and shows final pumpkin
    saveCanvas('myPumpkin', 'jpg'); //image of user's pumpkin saves to their computer
    noLoop();   
}

function mouseReleased() {
    // Quit dragging
    dragging = false;
    objIsBeingDragged =false;
}
