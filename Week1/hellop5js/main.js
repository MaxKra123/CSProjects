let x, r, vx, balls;
 function setup()
{
  createCanvas(600,500);
  x = 5/2;
  r = 5;
  vx = 1
  balls = [];
}

function draw()
{
  background(0);
  fill(200,200,400);
  ellipse(x,height/2,r,r);
  x=x+vx;
  if(x > width -r/2)
  {
    vx=vx*-1;
  }
  if(x < 0 + r/2)
  {
    vx=vx*-1;
  }

  if(vx > 0)
  {
    r+=0.5;
  }
  if(vx < 0)
  {
    r-=0.5;
  }

  for (let b in balls)
  {
    balls[b].display();
  }

}

function keyPressed()
{
    balls.push(new Ball(200,height/2));
}
