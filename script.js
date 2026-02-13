// ===============================
// COUNTDOWN TO MIDNIGHT
// ===============================
const countdownElement = document.getElementById("countdown");
const overlay = document.querySelector('.overlay'); // hide until countdown ends

function updateCountdown() {
  const now = new Date();

  // set target midnight (today or tomorrow if already passed)
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0); // midnight tonight

  const distance = midnight - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "💖 The page is now open! 💖";
    overlay.style.display = "block"; // show the main content
    clearInterval(timerInterval);
    return;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

// Hide the overlay initially
overlay.style.display = "none";

// Update every second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // run immediately to avoid 1-second delay



const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function goToLove() {
  window.location.href = "love.html";
}



// ==========================
// IMAGE COMMENTS POPUP (LOVE.HTML)
// ==========================
containers.forEach(container => {
  const comment = container.querySelector('.img-comment');

  const toggleComment = (e) => {
    e.stopPropagation();

    document.querySelectorAll('.img-comment').forEach(c => {
      if (c !== comment) c.classList.remove('show');
    });

    comment.classList.toggle('show');
  };

  container.addEventListener('click', toggleComment);
  container.addEventListener('touchstart', toggleComment);
});

// Hide all comments if clicking/touching outside
const hideAllComments = () => {
  document.querySelectorAll('.img-comment').forEach(c => c.classList.remove('show'));
};

document.addEventListener('click', hideAllComments);
document.addEventListener('touchstart', hideAllComments);


