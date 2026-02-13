// Set the date/time for the countdown (YYYY-MM-DD HH:MM:SS)
const targetDate = new Date("2026-02-14 00:00:00").getTime(); // e.g., Valentine's Day

const countdownElement = document.getElementById("countdown");

const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = "💖 The page is now open! 💖";
    document.querySelector('.overlay').style.display = "block"; // show the content
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);



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

