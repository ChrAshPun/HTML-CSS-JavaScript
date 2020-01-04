function Fruit() {
  this.x;
  this.y;

  this.pickLocation = () => { // randomly choose fruit's x & y coordinates
    this.x = Math.floor(Math.random() * columns) * scale;
    this.y = Math.floor(Math.random() * columns) * scale;
  };

  this.draw = () => { // place fruit on grid
    context.fillStyle = "#F23D5E"; // color fruit red
    context.fillRect(this.x, this.y, scale, scale);
  };
}
