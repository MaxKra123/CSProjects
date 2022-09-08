class Ball{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    vx = random(1,5);
    vy = random(-10,-1);
  }
  move()
  {
    this.x = this.x + vx;
    this.y = this.y + vy;
  }
  display()
  {
    fill(0);
    ellipse(this.x, this.y, 10,10);
  }
}
