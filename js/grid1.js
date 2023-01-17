function setup() {
    //the width and the hight of indivual cell
    const CELL_SIZE = 50;
    createCanvas(800, 800);
    background(0)
    noStroke();
    // let x and let y need to be outside the loop or they will get reset to 0 every time
    let x = 0;
    let y = 0;
    let xVariation = 5;
    let yVariation = 5;
    let widthVariation = 5;
    let heightVariation = 20;
    // creating a color array
    let colours = [color('#251f3a'), color('#deb210'),color('#dbd9d7'), color('#ce3219'), color('#324494')];
    while(y < height) {
        while(x < width){
            // pass the array though random
            fill(random(colours));
            rect(x+random(-xVariation, xVariation),y + random(-yVariation, yVariation), CELL_SIZE + random(-heightVariation, heightVariation));
            x+= CELL_SIZE;
        }
        y += CELL_SIZE;
        x=0;
}
}
function draw() {

}