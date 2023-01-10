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
    amplitude = windowHeight / 4;
    frequency = windowWidth / 4;
    maxAngle = (windowWidth / frequency) * TWO_PI;
}

// draw function executes every frame
function draw() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    while (theta < maxAngle + offset) {
        //sine wave 1
        y = sin(theta - 0.2) * amplitude;
        fill(150, 0, 0)
        ellipse(x, y + height * 0.5, 10);
        //cosine wave 1
        y = cos(theta) * amplitude;
        fill(0, 255, 0)
        ellipse(x, y + height * 0.5, 10);
        //sine wave
        y = sin(theta) * amplitude;
        fill(255, 0, 0)
        ellipse(x, y + height * 0.5, 10);
        //cosine wave
        y = cos(theta) * amplitude;
        fill(0, 255, 0)
        ellipse(x, y + height * 0.5, 10);
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;

}
