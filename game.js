function startGame() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };
  
    const game = new Phaser.Game(config);
  
    let player;
    let pizzas;
    let ghosts;
    let cursors;
  
    function preload() {
      this.load.image('pacman', 'https://example.com/peza_pacman.png'); // Replace with your mascot's image
      this.load.image('pizza', 'https://example.com/pizza.png'); // Replace with pizza image
      this.load.image('ghost', 'https://example.com/ghost.png'); // Replace with ghost image
    }
  
    function create() {
      player = this.physics.add.image(400, 300, 'pacman').setScale(0.1);
      player.setCollideWorldBounds(true);
  
      pizzas = this.physics.add.group({
        key: 'pizza',
        repeat: 11,
        setXY: { x: 100, y: 100, stepX: 70 }
      });
  
      pizzas.children.iterate(function (pizza) {
        pizza.setScale(0.05);
        pizza.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });
  
      ghosts = this.physics.add.group();
      createGhosts(3); // You can adjust the number of ghosts here
  
      cursors = this.input.keyboard.createCursorKeys();
      this.physics.add.collider(player, pizzas, collectPizza, null, this);
      this.physics.add.collider(player, ghosts, hitGhost, null, this);
    }
  
    function update() {
      if (cursors.left.isDown) {
        player.setVelocityX(-160);
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);
      } else {
        player.setVelocityX(0);
      }
  
      if (cursors.up.isDown) {
        player.setVelocityY(-160);
      } else if (cursors.down.isDown) {
        player.setVelocityY(160);
      } else {
        player.setVelocityY(0);
      }
    }
  
    function collectPizza(player, pizza) {
      pizza.disableBody(true, true);
      // You can add Peza token logic here for rewards
    }
  
    function hitGhost(player, ghost) {
      player.setTint(0xff0000); // Change color on hit
      this.physics.pause();
      alert("Game Over! You were caught by a ghost!");
    }
  
    function createGhosts(num) {
      for (let i = 0; i < num; i++) {
        let ghost = this.physics.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'ghost');
        ghost.setVelocity(Phaser.Math.Between(-50, 50), Phaser.Math.Between(-50, 50));
        ghost.setBounce(1);
        ghost.setCollideWorldBounds(true);
        ghosts.add(ghost);
      }
    }
  }
  