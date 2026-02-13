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

document.addEventListener('click', () => {
  document.querySelectorAll('.img-comment').forEach(c => c.classList.remove('show'));
});
document.addEventListener('touchstart', () => {
  document.querySelectorAll('.img-comment').forEach(c => c.classList.remove('show'));
});
