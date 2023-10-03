/**
 * Love, Actually
 * Léa
 * 
 * Find your soulmate!
 */

//circle that user controls
let player = {
    x: 250,
    y: 250,
    size: 50,
    minSize: 50,
    maxSize: 700,
    fill: 0,
    dragging: false
  };

//other circle represents other soul
let circle = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};
  
let state = "title"   //starts at title screen 

function setup() {
    createCanvas(windowWidth, windowHeight);
    setupCircles();
  }

//position circle and start movement in random direction 
function setupCircles () {
    circle.x = width/4;

    circle.vx = random(-circle.speed,circle.speed);
    circle.vy = random(-circle.speed,circle.speed);
}

//different states 
function draw() {
    background(255,0,0);
  
    if (state === `title`) {
        title();
      }

      else if (state === 'instructions') {
        instructions();
      }

      else if (state === `simulation`) {
        simulation();
    }
      else if (state === `love`) {
            love();
    }
      else if (state === `sadness`) {
            sadness();
    }
      else if (state === `surprise`) {
        surprise();
}
}
//title screen
function title() {
        push();
        textSize(44);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(`FIND YOUR SOULMATE`,width/2,height/2);
        pop();

        push();
        textSize(24);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(`press "enter" to start`,width/2,height/2 + 80);
        pop();
      }

// instructions screen
function instructions(){
        push();
        textSize(44);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(`INSTRUCTIONS`,width/2,height/4);
        pop();

        push();
        textSize(24);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(`drag the circle (your soul) to find love`,width/2,height/2);
        pop();

        push();
        textSize(14);
        fill(255, 166, 248);
        textAlign(CENTER,CENTER);
        text(`use the touchpad to change your soul's size for a surprise...`,width/2,height/2 +80);
        pop();

        push();
        textSize(24);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text(`click your mouse to begin`,width/2,height/2 + 120);
        pop();
}

function simulation() {
    move();
    checkOffscreen();
    checkOverlap();
    bigSoul();
    display();
}

function love() {
    push();
    textSize(34);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`you found your soulmate!`,width/2,height/2);
    pop();
  }
  
  function sadness() {
    push();
    textSize(64);
    fill(255,255,255);
    textAlign(CENTER,CENTER);
    text(`not the one :(`,width/2,height/2);
    pop();
  }

//easter egg
  function surprise(){
    push();
    textSize(64);
    fill(255, 166, 248);
    textAlign(CENTER,CENTER);
    text(`definition`,width/2,height/4);
    pop();

    push();
    textSize(34);
    textWrap(WORD);
    fill(255, 166, 248);
    textAlign(CENTER,CENTER);
    text(`A soulmate is a person with whom one has a feeling of deep or natural affinity.\n This may involve similarity, love, romance, platonic relationships, \n comfort, intimacy, sexuality, sexual activity, spirituality, \n compatibility and trust.`,width/2, height/4 +150);
    pop();
  }

//circle moves 
function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}

// Check if the circles have gone offscreen
function checkOffscreen() {
    if (isOffscreen(player) || isOffscreen(circle)) {
      state = `sadness`;
    }
  }
  
  function isOffscreen(circle) {
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
      return true;
    }
    else {
      return false;
    }
  }
  
  // Check if the circles overlap
  function checkOverlap() {
    let d = dist(player.x,player.y,circle.x,circle.y);
    if (d < player.size/2 + circle.size/2) {
      state = `love`;
    }
  }

// checker if user's circle grows too big to reveal easter egg
function bigSoul(){
    if (player.size > 500)
    state = 'surprise';
}

//display both souls
function display() {
    fill(player.fill);
    ellipse(player.x, player.y, player.size);
    ellipse(circle.x,circle.y,circle.size);
}

//start instruction page
function keyPressed() {
    if (keyCode === 13)
    state = 'instructions'; 
}

// mousePressed() is called at the moment the user presses down a mouse button
function mousePressed() {
    if (state === `instructions`) {
        state = `simulation`;
      }
    // Calculate the distance between the mouse position and the circle position
    let d = dist(mouseX, mouseY, player.x, player.y);

    if (d < player.size / 2) {
      // drag the circle
      player.dragging = true;
    }
  }
  
  // mouseReleased() is called at the moment the user releases a mouse button
  function mouseReleased() {
    if (state === `title`) {
        state = `simulation`;
      }
    // If the mouse is released, we should stop dragging the circle
    player.dragging = false;
  }
  
  // mouseDragged() is called every frame that the user is moving the mouse
  // with a button held down
  function mouseDragged() {
    if (state === `title`) {
        state = `simulation`;
      }
    // When the mouse is dragged (with the mouse button down), we check if the circle
    // is being dragged
    if (player.dragging) {
      player.x = mouseX;
      player.y = mouseY;
    }
  }
  
  // mouseWheel() is called every frame that the user is scrolling with the scroll wheel on
  // a mouse or using their touchpad
  function mouseWheel(event) {
    if (state === `title`) {
        state = `simulation`;
      }
    
    //user's circle size changes
    player.size += event.delta;
    player.size = constrain(player.size, player.minSize, player.maxSize);
  }