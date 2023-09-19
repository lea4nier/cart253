/**************************************************
"I Like To Move It" Exercise

Léa Fournier

♡ ♡ Valentine's Day Card ♡ ♡
**************************************************/

//background
let bg = {
  r: 0,
  g: 0,
  b: 0
};

//left circle
  let circle1 = {
    x: 0,
    y: 300,
    size: 300,
    growthRate: 1,
    speed: 1, 
    alpha: 200
  };

  //right circle
  let circle2 = {
    x: 500,
    y: 300,
    size: 75,
    sizeRatio: 0.5,
    speed: -1,
    fill: 255,
    alpha: 200
  };

  // setup()
  //
  // creating canvas
  function setup() {
    createCanvas(500,500);
    noStroke();
  }
  
  // draw()
  //
  // drawing heart and circles
  function draw() {
  
    //canvas background
  background(bg.r,bg.g,bg.b);
 bg.r = map(circle1.size,100,width,0,255);

 //change heart color   
  fill(random(255), random(255), random(255));
    frameRate(100);



 //add text 
 text("THIS IS HOW MUCH I LOVE YOU", 155, 100)

    
//circle to follow mouse
ellipseMode(CENTER);
ellipse(mouseX,mouseY,10,10);

//left circle gets bigger with mouse
circle1.size = map(mouseY,height,0,100,800);
    
// Left circle moves in
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x,0,width/2);

    //change color
    circle1.fill = color(random(255), random(255), random(255)); // random fill for circle
  fill(circle1.fill); // Applly circle's random fill
   
  ellipse(circle1.x, circle1.y, circle1.size);
    
    circle1.size = constrain(circle1.size,0,width);
    
    ellipse(circle1.x,circle1.y,circle1.size);
  
    // Right circle
    circle2.x = circle2.x + circle2.speed;
    circle2.x = constrain(circle2.x,width/1.96,width);
   //change color
    circle2.fill = color(random(255), random(255), random(255)); // random fill for circle
  fill(circle2.fill); // Apply circle's random fill
  ellipse(circle2.x, circle2.y, circle2.size);
  ellipse(circle2.x,circle2.y,circle2.size);
  
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