
class Ball
{
constructor(x, y)
{
  this.x = x;
  this.y = y;
}

display()
{
  fill(random(255),random(255),random(255),random(255));
  ellipse(this.x, this.y, random(5,50),random(5,50));
}

}
