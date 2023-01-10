function setup() {
    createCanvas(windowWidth, windowHeight);
    let x = 0;
    let y = 0;
    let theta = 0;
    let amplitude = windowHeight/2;
    let frequency = windowWidth/4;
    let maxAngle = (windowWidth/frequency) * TWO_PI;
    // when using while, must give an end or it will go on forever
    while(theta < maxAngle){
        y = sin(theta) * 200;
    // 16 is the diameter of the circle
        ellipse(x, y + height*0.5, 16);
        theta += 0.2;
        x = (theta/maxAngle) * windowWidth;
    }
}
function draw() {
}
