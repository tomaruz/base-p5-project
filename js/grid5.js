const CELL_SIZE = 100;
let x = 0;
let y = 0;
let xVariation = 0;
let yVariation = 0;
let widthVariation = 0;
let heightVariation = 0;
let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 4];
let currentWidth = random(sizes);
let currentHeight = random(sizes);

noStroke();

function setup() {
   
    let colours = [color('#11304b'), color('#e1dbb4'), color('#ed9033'), color('#f9c554')];
    createCanvas(800, 800);

    while (y < height) {
        // fill is for shapes, so we use tint
        while (x < width) {
            
            fill(color('#cb252b'));
            // stroke(255)
            // strokeWeight(5)
            rect(x, y, 100, 100);

            
            // ellipse(x, y, 70)

            // if(random(1) > 0.5) //0.5 is the probability 
            // {
            //     arc(x + 50, y + 50, 80, 80, 0, PI);
            // }
            // else{
            //     triangle(x + 20, y + 75, x + 50, y + 25, x + 80, y + 75);
            // }

            fill(random(colours));
            noStroke();    
            arc(x, y, 100, 100, 0, radians(360));
        
            


            // triangle(x + 20, y + 75, x + 50, y + 25, x + 80, y + 75);
            x += CELL_SIZE;
        }

        y += CELL_SIZE;
        x = 0;
    }
    
}

function draw() {

}




