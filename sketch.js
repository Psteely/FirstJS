var canvas;
var input;
var h1;
var button;
var bgColour;
var slider;
var nameP

function setup() {
  canvas =  createCanvas(640, 480);
  bgColour = color(255,0,255);
   h1 = createElement('h1',"Test header");
   nameP = createP("your Name");
   button = createButton("colour change");
   button.mousePressed(colourChange);
   slider = createSlider(10,100,50);
   input = createInput("type your name")
   var sts = select('#sts');
   sts.style('background-color', 'orange');
}
function colourChange () {
    bgColour = color(random(255));
}
// function mousePressed () {
//     h1.remove();


// }
function draw() {
    background(bgColour);
    nameP.html(input.value());
 ellipse(400, 400, slider.value(), slider.value());
 text(input.value(),20,20);
}