function setup() {
    // The width and height of individual cell
    const CELL_SIZE = 100;
    createCanvas(800, 800);
    background(0);
    // let x and let y need to be outside the loop or they will get reset to 0 every time
    // VARIABLES
    let x = 0;
    let y = 0;

    let sizes = [CELL_SIZE, CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3, CELL_SIZE * 4];
    let currsize = random(sizes);
    let rectH = currsize;
    let currsize1 = random(sizes);
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    // creating a color array
    let colours = [color('#fbeee6'), color('#ffe5d8'), color('#ffcad4'), color('#f3abb6'), color('#9f8189')];

    while (y < height) {
        while (x < width) {

            // pass the array through random
            fill(random(colours));
            stroke(255);
            strokeWeight(10);

            rect(x, y, currsize, rectH);

            noStroke();
            fill(random(colours));


            rect(x + (currsize * 0.25), y + (currsize * 0.25), currsize * 0.5, currsize * 0.5);


            x += currsize;
            let availableWidth = width - x;
            currsize = random(sizes);


            // makes sure the cell at the edge only occupies the available space, so the border shows and doesn't get cut off
            while (currsize > availableWidth) {
                currsize -= CELL_SIZE;
            }
        }
        y += currsize1;
        let availableHeight = height - y;
        currsize1 = random(sizes);
        while (currsize1 > availableHeight) {
            currsize1 -= CELL_SIZE;
        }
        x = 0;
    }
}