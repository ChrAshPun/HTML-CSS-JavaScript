const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

(function setup() {
  snake = new Snake(); // create snake instance
  fruit = new Fruit(); // create fruit instance
  fruit.pickLocation(); // place fruit on random space

  window.setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height); // clear all filled rectangles
    fruit.draw(); //place fruit
    snake.update(); //update snake body array
    snake.draw(); // place snake

    if (snake.eating(fruit)) {
      fruit.pickLocation(); // if snake eats fruit, relocate fruit
    }

    snake.checkCollision(); // if snake hits itself, go back to one
    gameScore(); // display game score
  }, 150);
})();

window.addEventListener("keydown", evt => {
  const direction = evt.code;
  snake.changeDirection(direction); // change snake's direction after pressing arrow keys
});

gameScore = () => {
  document.getElementById("gameScore").innerHTML = "Score: " + snake.score; // display game score
};
