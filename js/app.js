// Enemy class. Player must avoid enemies
class Enemy {
  constructor() {
    // Variables applied to each of our instances go here
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // Multiply any movement by the dt parameter, ensuring the game runs at the same speed for all computers.
    this.x += (this.speed * dt);
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
}

// Player class with update(), render() and handleInput() methods.
class Player {
  constructor() {
    this.x = 202;
    this.y = 405;
    this.sprite = 'images/char-cat-girl.png';
  }
  update() {
    //check for collision
    //check if water has been reached

  }
  //Draw the player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //handle key input from event listener below
  handleInput(keys){
    switch(keys){
        case 'up':
            if (this.y > 0) {
                this.y -= 83;
            };
            break;
        case 'down':
            if (this.y < 405) {
                this.y += 83;
            };
            break;
        case 'left':
            if (this.x >0) {
                this.x -= 101;
            };
            break;
        case 'right':
            if (this.x < 404) {
                this.x += 101;
            };
            break;
    }
  }
}

// Instantiate objects.
const allEnemies = [new Enemy()];
const player = new Player();


// Listens for key presses and sends the keys to Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
