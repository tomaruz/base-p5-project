function setup() {
    //the width and the hight of indivual cell
    const CELL_SIZE = 50;
    createCanvas(800, 800);
    background(0)
    // let x and let y need to be outside the loop or they will get reset to 0 every time
    // VARIABLES
    let x = 0;
    let y = 0;
    let xVariation = 0;
    let yVariation = 0;
    let widthVariation = 0;
    let heightVariation = 0;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    // creating a color array
    let colours = [color('#251f3a'), color('#deb210'), color('#dbd9d7'), color('#ce3219'), color('#324494')];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            // pass the array though random
            fill(random(colours));
            // rect(x + random(-xVariation, xVariation), y + random(-yVariation, yVariation), CELL_SIZE + random(-heightVariation, heightVariation));
            rect(x,y, currentWidth, currentHeight);
            x += currentWidth;
            currentWidth = random(sizes);
        }
        y += currentHeight;
        currentHeight = random(sizes);
        x = 0;
    }
}
function draw() {

}