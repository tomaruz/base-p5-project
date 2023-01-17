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
    createCanvas(800, 800);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while (y < height) {
        // fill is for shapes, so we use tint
        while (x < width) {
            tint(random(255))
            let t = random(textures);
            image(t, x, y, CELL_SIZE)
            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}