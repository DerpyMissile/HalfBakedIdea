// // Set up game canvas
// //const canvas = document.getElementById('game-canvas');
// const ctx = canvas.getContext('2d');

// // Set up game state
// let currentState = 'mainMenu';

// // Set up menu buttons
// const startButton = {
//   x: 300,
//   y: 200,
//   width: 200,
//   height: 50,
//   color: black,
// };

// // Set up ingredient images
// // const ingredients = [
// //   { name: 'carrot', img: 'carrot.png' },
// //   { name: 'tomato', img: 'tomato.png' },
// //   { name: 'potato', img: 'potato.png' },
// //   { name: 'onion', img: 'onion.png' },
// // ];

// // Set up recipe steps
// // const recipe = [
// //   { action: 'chop', ingredient: 'carrot' },
// //   { action: 'chop', ingredient: 'tomato' },
// //   { action: 'boil', ingredient: 'potato' },
// //   { action: 'chop', ingredient: 'onion' },
// // ];

// // Set up current step
// let currentStep = 0;

// // Set up key bindings
// document.addEventListener('keydown', handleKeyPress);

// // Set up game loop
// // setInterval(gameLoop, 1000 / 60);

// // // Handle key presses
// // function handleKeyPress(event) {
// //   if (event.key === 'ArrowLeft') {
// //     // Move left
// //   } else if (event.key === 'ArrowRight') {
// //     // Move right
// //   } else if (event.key === 'ArrowUp') {
// //     // Move up
// //   } else if (event.key === 'ArrowDown') {
// //     // Move down
// //   } else if (event.key === ' ') {
// //     // Perform action
// //     performAction();
// //   }
// // }

// // // Perform action
// // function performAction() {
// //   const currentRecipeStep = recipe[currentStep];
// //   if (currentState === 'cooking' && currentRecipeStep) {
// //     if (currentRecipeStep.action === 'chop') {
// //       // Chopping animation
// //       // Check if correct ingredient was chopped
// //       if (/* correct ingredient */) {
// //         currentStep++;
// //       } else {
// //         // Incorrect ingredient chopped
// //       }
// //     } else if (currentRecipeStep.action === 'boil') {
// //       // Boiling animation
// //       // Check if correct ingredient was boiled
// //       if (/* correct ingredient */) {
// //         currentStep++;
// //       } else {
// //         // Incorrect ingredient boiled
// //       }
// //     }
// //   }
// // }

// // // Game loop
// // function gameLoop() {
// //   // Clear canvas
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);

// //   if (currentState === 'mainMenu') {
// //     // Draw start button
// //     ctx.fillStyle = '#00f';
// //     ctx.fillRect(startButton.x, startButton.y, startButton.width, startButton.height);
// //   } else if (currentState === 'cooking') {
// //     // Draw recipe step
// //     const currentRecipeStep = recipe[currentStep];
// //     if (currentRecipeStep) {
// //       const ingredient = ingredients.find(i => i.name === currentRecipeStep.ingredient);
// //       if (ingredient) {

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textBox1 = document.getElementById("textbox");
startScreen = setTimeout(function(){}, 1000);
let alpha = 1;
let gameScene = 0;

const x = 500;
const y = 500;
const width = 100;
const height = 100;

const images = [
  "images/thumbnail1.png",
  "images/thumbnail2.png",
  "images/thumbnail3.png",
];

let currentImageIndex = 0;

function drawStartScreen() {
  const currentImage = new Image();
  currentImage.src = images[currentImageIndex];
  currentImage.onload = function () {
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    startScreen = setTimeout(function () {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      drawStartScreen();
    }, 1000);
  };
}

drawStartScreen();
let audio = new Audio('www.bensound.com/royalty-free-music/track/cute');
audio.play();

window.onload = function(){
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.addEventListener('click', (e) =>{
    var rect = canvas.getBoundingClientRect();
    console.log("Mouse X position: " + e.clientX + "\nMouse Y position: " + e.clientY);
    //const clickAudio = new Audio('gunshot.mp3');
    //clickAudio.play();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    doStuff(mouseX, mouseY);
  });

  textBox1.style.visibility = "hidden"; 
}

function doStuff(posX, posY) {
  switch(gameScene){
    case (0):
      // // Set the fill style with an rgba value and the current alpha value
      // ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
      // // Draw a rectangle that fills the entire canvas
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      // // Decrease the alpha value by a small amount for the next frame
      // doThing = setTimeout(function () {
      //   alpha -= 0.01;
      // }, 100);
      
      // if(alpha > 0){
      //   clearTimeout(startScreen);
      // }else{
      //   gameScene++;
      //   textBox1.style.visibility = "visible"; 
      // }
      clearTimeout(startScreen);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gameScene++;
      break;
    case (1):
      textBox1.style.visibility = "visible"; 
      // Set the fill style to black
      ctx.fillStyle = "black";

      // Draw the text box
      ctx.fillRect(x, y, width, height);

      // Set the fill style to white
      ctx.fillStyle = "white";

      // Draw the text inside the text box
      ctx.fillText("Hey there", x + 10, y + 40);
      gameScene++;
      break;
    case(2):
      ctx.fillText("Hey there!", x + 10, y + 40);
      break;
  }
}
