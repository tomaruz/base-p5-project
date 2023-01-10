let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05;
let offset = 0; // the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;
function setup() {
    // when using while, must give an end or it will go on forever
    amplitude = windowHeight / 2;
    frequency = windowWidth / 4;
    maxAngle = (windowWidth / frequency) * TWO_PI;
}

// draw function executes every frame
function draw() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    // fill(255, 0 , 0)
    while (theta < maxAngle + offset) {
        y = sin(theta) * 100;
        // 16 is the diameter of the circle
        ellipse(x, y + height * 0.5, 10);
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;

}
