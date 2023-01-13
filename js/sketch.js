
// creating variables
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.02; // the speed
let offset = 0; // the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;
function setup() {
    createCanvas(windowWidth, windowHeight);
    amplitude = windowHeight / 2;
    frequency = windowWidth / 8; // the number of waves
    maxAngle = (windowWidth / frequency) * TWO_PI;
}

// draw function executes every frame
function draw() {
    background(0); // set the background to black
    noStroke();
    // fill(255, 0 , 0)

    // when using while, must give an end or it will go on forever
    while (theta < maxAngle + offset) {

        let length = 4;

        for (let i = length; i > 0; i--) {
        y = sin(theta) * 200; // the amplitude / how high the wave is
        // 16 is the diameter of the circle
        ellipse(x , y + height * 0.5, 20); // position on the screen and dots size
        theta += 0.4; // how far apart dots are from each other
        x = ((theta - offset) / maxAngle) * windowWidth;
        }


    }
    
    offset += inc;
    theta = offset;

}