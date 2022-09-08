let balls = [];
let vx = 0;
let vy = 0;
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }
}

function mousePressed(){

    balls.push(new Ball(width/2,height));

}
