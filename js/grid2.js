// an empty array
let textures = [];

function preload() {
    // the number of textures I have
    let texturesNum = 4;
    for (let i = 1; i <= texturesNum; i++) {
        // let texture = loadImage('images/texture' + i+'.png'); //concatenation
        let t = loadImage(`images/texture${i}.png`); //same as the top one but modern. backticks are 'template literals' and dollar sign curly brace is known as string interpolation
        textures.push(t); // once images get loaded, this adds texture to textures array
    }
}
function setup() {
    let colours = [color('#251f3a'), color('#deb210'), color('#dbd9d7'), color('#ce3219'), color('#324494')];
    createCanvas(800, 800);
    const CELL_SIZE = 100;
    let x = 0;
    let y = 0;
    let xVariation = 20;
    let yVariation = 20;
    let widthVariation = 0;
    let heightVariation = 0;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 4];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    noStroke();
    while (y < height) {
        // fill is for shapes, so we use tint
        while (x < width) {
            tint(random(colours));
            let t = random(textures);
            push()
            translate(x + CELL_SIZE/2, y+ CELL_SIZE/2);
            rotate(random(0.5));
            image(t, -CELL_SIZE/2, -CELL_SIZE/2, CELL_SIZE, CELL_SIZE);
            pop()
            x += CELL_SIZE;
        }
        
        y += CELL_SIZE;
        x = 0;
    }
}