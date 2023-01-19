var Spacing = 125;
var Offset = 100; //will start drawing with an offset of 100px from x and y axes
var minSize = 20;
var maxSize = 100;
var colors = ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']; //color array


function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER); //rectangles will be placed from their center onwards
    background('#264653');
    noStroke();
    frameRate(5); //speed of the animation
}

function draw() {
    var circleCountx = (windowWidth - 160) / Spacing; //-100 cause offset is 100 and we want the white space, this creates a number according to the width of the window to determine how many circles to draw
    var circleCounty = (windowHeight - 120) / Spacing;
    console.log(circleCounty)

    for (let c = 0; c < 12; c++){
        for (let i = 0; i < circleCountx; i++){
            for (let j = 0; j < circleCounty; j++){
                //need to create different sizes, otherwise their will be drawn on top of each other
                let colorpicker = int(random(colors.length));
                fill(colors[colorpicker]);
                let size = random(minSize,maxSize);
                ellipse(Offset + Spacing * i, Offset + Spacing * j, size, size);
                rect(Offset + Spacing * i, Offset + Spacing * j, size - 10, size - 10); //make the size smaller so can still see the circle
            }
        }
    }
}