document.addEventListener('DOMContentLoaded', () => {

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');
  const galleryImages = document.querySelectorAll('.gallery-item img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });

  const cards = document.querySelectorAll('.gallery-item, .quote-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.02)';
      card.style.zIndex = '30';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.zIndex = '';
    });
  });

});

window.toggleMusic = function() {
  const audio = document.getElementById("weddingMusic");
  const btn = document.getElementById("musicBtn");
  const playPath = document.getElementById("playPath");
  const pausePath = document.getElementById("pausePath");

  if (audio.paused) {
    audio.play();
    btn.classList.add("playing");
    playPath.classList.add("hidden");
    pausePath.classList.remove("hidden");
  } else {
    audio.pause();
    btn.classList.remove("playing");
    playPath.classList.remove("hidden");
    pausePath.classList.add("hidden");
  }
};

const autoScrollBtn = document.getElementById("autoScrollBtn");
let scrollInterval = null;
let isScrolling = false;

const playIconPath = "M8 5v14l11-7z";
const pauseIconPath = "M6 19h4V5H6v14zm8-14v14h4V5h-4z";

autoScrollBtn.addEventListener("click", function () {
  if (!isScrolling) {
    startAutoScroll();
  } else {
    stopAutoScroll();
  }
});

function startAutoScroll() {
  isScrolling = true;
  autoScrollBtn.classList.add("scrolling");
  
autoScrollBtn.querySelector("path").setAttribute("d", pauseIconPath);

  scrollInterval = setInterval(function () {
    window.scrollBy(0, 1);

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      stopAutoScroll();
    }
  }, 30);
}

function stopAutoScroll() {
  isScrolling = false;
  autoScrollBtn.classList.remove("scrolling");
  autoScrollBtn.querySelector("path").setAttribute("d", playIconPath);
  
  clearInterval(scrollInterval);
}

window.addEventListener("wheel", stopAutoScroll);
window.addEventListener("touchmove", stopAutoScroll);
