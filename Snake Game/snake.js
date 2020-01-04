function Snake() {
  this.score = 0;
  this.x = 0;
  this.y = 0;
  this.xspeed = scale;
  this.yspeed = 0;
  this.body = [{ x: this.x, y: this.y }];

  this.draw = () => {
    context.fillStyle = "#04BF8A"; // color snake green
    for (let i = 0; i < this.body.length; i++) {
      context.fillRect(this.body[i].x, this.body[i].y, scale, scale);
    } // for each index in array, fill rectangle green
  };

  this.update = () => {
    this.body.unshift({ x: this.x, y: this.y }); // add snake head to the beginning of the snake's body array
    this.body.pop(); // remove the last index in the snake's body array

    this.x += this.xspeed; // move to the next column
    this.y += this.yspeed; // move to the next row

    if (this.x === columns * scale) {
      this.x = 0; // if the snake goes off grid from the right side, go back to the left of the grid
    }
    if (this.y === rows * scale) {
     this.y = 0; // if the snake goes off grid from the bottom side, go back to the top of the grid
    }
    if (this.x < 0) {
     this.x = (columns - 1) * scale; // if the snake goes off grid from the left side, go back to the right of the grid
    }
    if (this.y < 0) {
     this.y = (rows - 1) * scale; // if the snake goes off grid from the top side, go back to the bottom of the grid
    }
  };

  this.eating = fruit => {
    if (this.body[0].x === fruit.x && this.body[0].y === fruit.y) { // if the snake head lands on a fruit
      this.body.push({ x: this.x, y: this.y }); // grow the snakes length
      this.score++; // add 1 to the score
      return true;
    }
  };

  this.checkCollision = () => {
    for (let i = 1; i < this.body.length; i++) {
      if (
        this.body[0].x === this.body[i].x &&
        this.body[0].y === this.body[i].y
      ) {
        this.body = [{ x: this.x, y: this.y }]; // if the snake hits itself, go back to one
        this.score = 0; // reset score back to 0
      }
    }
  };

  this.changeDirection = direction => { // change snake's direction
    switch (direction) {
      case "ArrowUp":
        if (this.yspeed === 0) { // don't let snake go backwards
          this.xspeed = 0;
          this.yspeed = -scale; // move up
        }
        break;
      case "ArrowDown":
        if (this.yspeed === 0) {
          this.xspeed = 0;
          this.yspeed = scale; // move down
        }
        break;
      case "ArrowLeft":
        if (this.xspeed === 0) {
          this.xspeed = -scale; // move left
          this.yspeed = 0;
        }
        break;
      case "ArrowRight":
        if (this.xspeed === 0) {
          this.xspeed = scale; // move right
          this.yspeed = 0;
        }
        break;
    }
  };
}
