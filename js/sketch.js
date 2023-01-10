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
    let length = 20;
    while (theta < maxAngle + offset) {
        // amplitude = sin(theta - offset) * (windowHeight/2);
        amplitude = ((theta-offset)/maxAngle) * (windowHeight/2);
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 0.05)) * amplitude;
            fill(230, 230 - (230/length * i), 250);
            square(x, y + height * 0.5, 16);
            // ellipse(x, y + height * 0.5, 20);
        }
        for (i = length; i > 0; i--) {
            y = cos(theta - (i * 0.08)) * amplitude;
            fill(255, 255 - (255/length * i), 0)
            ellipse(x, y + height * 0.5, 10);
            // square(x, y + height * 0.5, 16);
        }
        theta += 0.2;
        x = ((theta - offset)/maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
