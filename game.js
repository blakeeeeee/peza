// Create a canvas element for the game
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d');

// Add canvas to the game container
const gameContainer = document.getElementById('game-container');

// Function to initialize and start the game
function startGame() {
  gameContainer.innerHTML = ''; // Clear the "Game will appear here" text
  gameContainer.appendChild(canvas); // Append the canvas element to the container

  // Example game logic: Draw a simple pizza
  function drawPizza() {
    ctx.fillStyle = '#ff6600'; // Pizza crust color
    ctx.beginPath();
    ctx.arc(400, 300, 100, 0, Math.PI * 2, false); // Draw a circle (pizza)
    ctx.fill();

    ctx.fillStyle = '#ffcc00'; // Pizza topping (cheese)
    ctx.beginPath();
    ctx.arc(400, 300, 80, 0, Math.PI * 2, false); // Draw smaller circle (cheese)
    ctx.fill();
  }

  // Call the function to draw the pizza
  drawPizza();

  // Optional: Add more game logic here (e.g., adding movement or animation)
}
