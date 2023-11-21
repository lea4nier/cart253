/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 50,
    // An array to our the bees
    bees: [],
    // How many bees in the garden
    numBees: 5,
    // The color of the grass (background)
    grassColor: {
        r: 0,
        g: 0,
        b: 0
    }
};

// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        // Create variables for our arguments for clarity
        let x = random(0, width);
        let y = random(0, height);
        let size = random(50, 80);
        let stemLength = random(50, 100);
        // let petalColor = flower.petalColor;
        // Create a new flower using the arguments
        // let flower = new Flower(x, y, size, stemLength, petalColor);
        let flower = new Flower(x, y, size, stemLength);
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
    }

    // Create our bees by counting up to the number of bees
    for (let i = 0; i < garden.numBees; i++) {
        // Create variables for our arguments for clarity
        let x = random(0, width);
        let y = random(0, height);
        // Create a new bee using the arguments
        let bee = new Bee(x, y);
        // Add the bee to the array of bees
        garden.bees.push(bee);
    }

}

// draw()
// Displays our flowers
function draw() {
    // Display the grass
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        // Check if this flower is alive
        if (flower.alive) {
            // Update the flower by shrinking it and displaying it
            flower.shrink();
            flower.display();
            flower.pollinate();
            // flower.grow();
        }

    }

    // Loop through all the bees in the array and display them
    for (let i = 0; i < garden.bees.length; i++) {
        let bee = garden.bees[i];
        // Check if this flower is alive
        if (bee.alive) {
            // Shrink and move the bee
            bee.shrink();
            bee.move();

            // NEW! Go through the entire flower array and try to pollinate the flowers!
            // Note that we use j in our for-loop here because we're already inside
            // a for-loop using i!
            for (let j = 0; j < garden.flowers.length; j++) {
                let flower = garden.flowers[j];
                bee.tryToPollinate(flower);
            }

            // Display the bee
            bee.display();
        }
    }

}

function mousePressed() {
    // Loop through every flower in the garden
    for (let i = 0; i < garden.flowers.length; i++) {
        // Get the current flower in the loop
        let flower = garden.flowers[i];
        // Call the flower's mousePressed() method
        flower.mousePressed();

    }
}