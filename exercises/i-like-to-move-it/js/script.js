/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let bg = {
    r: 161,
    g: 220,
    b: 255
  };
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
  
  let triangle1 = {
    x1: 500,
    y1: 275,
    x2: 58,
    y2: 20,
    x3: 86,
    y3: 75,
    speed: 1,  
    
  }; 

  // setup()
  //
  // Description of setup() goes here.
  function setup() {
    createCanvas(500,500);
    noStroke();
  }
  
  // draw()
  //
  // Description of draw() goes here.
  function draw() {

    // Background
    background(bg.r,bg.g,bg.b);
    bg.r = map(circle1.size,100,width,0,255);

    ellipseMode(CENTER);
    ellipse(mouseX,mouseY,10,10);
    circle1.size = map(mouseY,height,0,100,400);
    
    triangle1.x1 = triangle1.x1 + triangle1.speed; 
    triangle1.x2 = triangle1.x2 + triangle1.speed;
    triangle1.x3 = triangle1.x3 + triangle1.speed;
    triangle1.y1 = triangle1.y1 + triangle1.speed;
    triangle1.y2 = triangle1.y2 + triangle1.speed;
    triangle1.y3 = triangle1.y3 + triangle1.speed;
   
    // Left circle
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x,0,width/2);
   //change color
    circle1.fill = color(random(255), random(255), random(255)); // Get a random fill for our circle!
  fill(circle1.fill); // Apply our circle's random fill
   
  ellipse(circle1.x, circle1.y, circle1.size);
    
    circle1.size = constrain(circle1.size,0,width);
    
    ellipse(circle1.x,circle1.y,circle1.size);
  
    // Right circle
    circle2.x = circle2.x + circle2.speed;
    circle2.x = constrain(circle2.x,width/2,width);
   //change color
    circle2.fill = color(random(255), random(255), random(255)); // Get a random fill for our circle!
  fill(circle2.fill); // Apply our circle's random fill
  ellipse(circle2.x, circle2.y, circle2.size);

    
    ellipse(circle2.x,circle2.y,circle2.size);
  }