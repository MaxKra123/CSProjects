
class Ball
{
constructor(x, y)
{
  this.x = x;
  this.y = y;
}

display()
{
  fill(255);
  ellipse(this.x, this.y, 50,50);
}

}
