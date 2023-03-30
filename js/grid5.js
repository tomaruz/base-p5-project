const CELL_SIZE = 100;
let x = 0;
let y = 0;

noStroke();

function setup() {
    let colours = [color('#251f3a'), color('#deb210'), color('#dbd9d7'), color('#ce3219'), color('#324494')]; // color array
    createCanvas(800, 800);

    //creating a grid
    while (y < height) {

        while (x < width) {
            fill(random(colours)); // returns a random element from colours array and fills the squares
            stroke(255)
            strokeWeight(5)
            rect(x, y, 100, 100);

            //drawing shapes inside the squares
            noStroke();
            fill(random(colours));

            if(random(1) > 0.5) //0.5 is the probability 
            {
                arc(x + 50, y + 50, 80, 80, 0, PI);
            }
            else{
                triangle(x + 20, y + 75, x + 50, y + 25, x + 80, y + 75);
            }

            x += CELL_SIZE;
        }

        y += CELL_SIZE;
        x = 0;
    }
    
}




