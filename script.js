function createStars() {
  const starsContainer = document.querySelector('.stars');
  const star = document.createElement('div');
  star.classList.add('star');
  starsContainer.appendChild(star);
}

function animateStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    const xPos = (index + 1) * 200; 
    const yPos = Math.floor(Math.random() * 400) + 100; 
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;
  });
}

window.onload = function() {
  for (let i = 0; i < 20; i++) {
    createStars();
  }
  animateStars();


  setInterval(() => {
    animateStars();
  }, 10,);
};

function createStars() {
  const starsContainer = document.querySelector('.stars');
  const star = document.createElement('div');
  star.classList.add('star');
  starsContainer.appendChild(star);
}
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const star = document.createElement('div');
  star.classList.add('star');
  starsContainer.appendChild(star);
}


window.onload = function() {
  for (let i = 0; i < 50; i++) { 
    createStars();
  }
};

document.addEventListener("mousemove", function (event) {
  const cursor = document.getElementById("custom-cursor");
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});
