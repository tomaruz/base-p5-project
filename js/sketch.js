let x = 0;
let y = 0;
let theta = 0;
let inc = 0.02;
let offset = 0; // the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;
let num = 25;
let mx = [];//array
let my = [];
let black = 0;
let white = 255;
let backgroundColor = black;
let circleColor = white;
function setup() {
    noCursor();
    // when using while, must give an end or it will go on forever
    amplitude = windowHeight;
    frequency = windowWidth;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
    noStroke();
    for (let i = 0; i < num; i++) {
        mx.push(i);
        my.push(i);
    }
}

// draw function executes every frame
function draw() {
    background(backgroundColor);
    stroke(circleColor);
    noFill();


    let which = frameCount % num;
    mx[which] = mouseX;
    my[which] = mouseY;

    for (let i = 0; i < num; i++) {
        // which+1 is the smallest (the oldest in the array)
        let index = (which + 1 + i) % num;
        ellipse(mx[index], my[index], i, i);
        stroke(circleColor);
    }
    let length = 4;
    while (theta < maxAngle + offset) {
        // amplitude = sin(theta - offset) * (windowHeight*0.5);
        amplitude = ((theta - offset) / maxAngle) * (windowHeight / 2);

        for (let i = length; i > 0; i--) {
            y = sin(theta - (i * 0.05)) * amplitude;
            // square(x, y + height * 0.5, 20);
            stroke(circleColor);
            ellipse(x, y + height / 2, 10);

        }
        for (let i = length; i > 0; i--) {
            y = cos(theta - 5 - (i * 0.05)) * amplitude;
            // fill(100, 255 - (255/length * i), 0)
            ellipse(x, y + height / 2, 10);
        }
        for (let i = length; i > 0; i--) {
            y = cos(theta - 5 - (i * 0.05)) * amplitude;
            // fill(100, 255 - (255/length * i), 0)
            ellipse(x, y + height / 9, 50);
        }
        theta += 0.06;
        x = ((theta - offset) / maxAngle) * windowWidth;

    }

    offset += inc;
    theta = offset;
}

function mousePressed() {
    if (backgroundColor == black){
        backgroundColor = white
        circleColor = black
    }
    else{
        backgroundColor = black
        circleColor = white
    }

}

