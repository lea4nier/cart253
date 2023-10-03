/**
 * Love, Actually
 * Léa
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let player = {
    x: 250,
    y: 250,
    size: 50,
    // Because it changes size, let's set a minimum and maximum size
    minSize: 50,
    maxSize: 700,
    fill: 0,
    // We need to keep track of whether the circle is being dragged or not
    // so we know whether to move it with the mouse position
    dragging: false
  };

let circle = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 1
};
  
let state = "title"

function setup() {
    createCanvas(500, 500);
    setupCircles();
  }

function setupCircles () {
    circle.x = width/4;

    circle.vx = random(-circle.speed,circle.speed);
    circle.vy = random(-circle.speed,circle.speed);
}
  
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
    fill(150,150,255);
    textAlign(CENTER,CENTER);
    text(`not the one :(`,width/2,height/2);
    pop();
  }

  function surprise(){
    push();
    textSize(64);
    fill(255, 166, 248);
    textAlign(CENTER,CENTER);
    text(`definition`,width/2,height/4);
    pop();

    push();
    textSize(17);
    textWrap(WORD);
    fill(255, 166, 248);
    textAlign(CENTER,CENTER);
    text(`A soulmate is a person with whom one has a feeling of deep or natural affinity. This may involve similarity, love, romance, platonic relationships, comfort, intimacy, sexuality, sexual activity, spirituality, compatibility and trust.`,135, 300, height/2);
    pop();
  }
function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}
function checkOffscreen() {
    // Check if the circles have gone offscreen
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
  
  function checkOverlap() {
    // Check if the circles overlap
    let d = dist(player.x,player.y,circle.x,circle.y);
    if (d < player.size/2 + circle.size/2) {
      state = `love`;
    }
  }

function bigSoul(){
    if (player.size > 500)
    state = 'surprise';
}

function display() {
    fill(player.fill);
    ellipse(player.x, player.y, player.size);
    ellipse(circle.x,circle.y,circle.size);
}

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
    // If the distance is less that the circle's radius, we know the mouse was
    // inside the circle when pressed
    if (d < player.size / 2) {
      // So we can now drag the circle
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
      // If it is, we move it to the mouse position
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
    // When the mouse wheel (or touchpad) is scrolled
    // event.delta contains the distance (in pixels) it scrolled
    // So we can add this to the size of the circle
    player.size += event.delta;
    // And constrain the size to stay within the minimum and maximum
    player.size = constrain(player.size, player.minSize, player.maxSize);
  }