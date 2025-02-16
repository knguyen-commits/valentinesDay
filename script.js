
function onButtonClick() {
  alert('WHOOHOOOO!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);


const heartsOnScreen = 15;  //set constant variable (heartsOnScreen) to 15 so there are always at least 15 hearts on screen

// Create & adding a heart
function createHeart() {
  const container = document.getElementById('hearts-container');

  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // random position (X and Y)
  const randomX = Math.random() * window.innerWidth;  // Random X position
  const randomY = Math.random() * window.innerHeight; // Random Y position

  heart.style.left = `${randomX}px`;  // Random X position
  heart.style.top = `${randomY}px`;   // Random Y position
  
  // Randomize heart size (between 40px and 100px)!!
  const size = Math.random() * 60 + 40;
  heart.style.fontSize = `${size}px`;

  // create heart (unicode because I am not making that in CSS) 
  heart.textContent = '❤️';  // You can use other heart characters like 💖 or 💘

  container.appendChild(heart); 

  // Remove heart after animation (6 seconds)
  setTimeout(() => {
    heart.remove();
  }, 6000); 
}

//make sure there are 15 hearts at all times 
function maintainHearts() {
  const container = document.getElementById('hearts-container');

  //if not make more hearts
  while (container.children.length < heartsOnScreen) {
    createHeart();
  }
}

for (let i = 0; i < heartsOnScreen; i++) {
  createHeart();
}

//calls function to create hearts and check if there are enough 
setInterval(() => {
  maintainHearts();  // Ensure the hearts container always has 15 hearts
  createHeart();  // Add a new heart every interval
}, 500); // Add new hearts every 0.5 seconds (adjustable for faster/slower heart flow)




