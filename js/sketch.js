let x = 0;
let y = 0;
let theta = 0;
let inc = 0.1;
let offset = 0; // the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;
let num = 60;
let mx = [];
let my = [];
function setup() {
    // when using while, must give an end or it will go on forever
    amplitude = windowHeight;
    frequency = windowWidth;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(720, 400);
    noStroke();
    fill(255, 153);
    for (let i = 0; i < num; i++) {
      mx.push(i);
      my.push(i);
    }
}

// draw function executes every frame
function draw() {
    stroke(1);
    noFill();

    createCanvas(windowWidth, windowHeight);

    let which = frameCount % num;
    mx[which] = mouseX;
    my[which] = mouseY;
  
    for (let i = 0; i < num; i++) {
      // which+1 is the smallest (the oldest in the array)
      let index = (which + 1 + i) % num;
      ellipse(mx[index], my[index], i, i);
    }
    let length = 10;
    while (theta < maxAngle + offset) {
        // amplitude = sin(theta - offset) * (windowHeight*0.5);
        amplitude = ((theta - offset) / maxAngle) * (windowHeight / 2);
        for (let i = length; i > 0; i--) {
            y = sin(theta - (i * 0.08)) * amplitude;
            // fill(230, 230 - (230 / length * i), 100);
            square(x, y + height * 0.5, 20);
            // ellipse(x, y + height / 2, 10);
        }
        for (let i = length; i > 0; i--) {
            y = cos(theta - (i * 50)) * amplitude;
            // fill(0, 0, 255 - (255 / length * i))
            ellipse(x, y + height / 2, 10);
            // square(x, y + height * 0.5, 16);
        }
        theta += 0.08;
        x = ((theta - offset) / maxAngle) * windowWidth;
        
    }
    

    offset += inc;
    theta = offset;
}
