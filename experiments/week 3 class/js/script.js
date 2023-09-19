/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let me = {
    x: 0,
    y: 200,
    h: 500, 
    speed: 2,
}
/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500); 
    colorMode(HSL);
}


/**
 * Description of draw()
*/
function draw() {
Map()
stroke(0);
line(me.x, me.y, me.x, me.y - me.h); 
me.x = me.x + me.speed; 


}