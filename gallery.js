// Selects the gallery and all elements inside it
const gallery = document.querySelector('.gallery');

// Create the lightbox dynamically
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="backdrop"></div>
  <div class="box"></div>`;

document.body.appendChild(lightbox);

const box = lightbox.querySelector('.box');

// When clicking on any image or video inside the gallery
gallery.addEventListener('click', (e) => {
  const media = e.target.closest('img, video');
  if (!media) return;

// Clear the previous content
  box.innerHTML = '';

  if (media.tagName === 'IMG') {
    const img = document.createElement('img');
    img.src = media.src;
    box.appendChild(img);
  } else if (media.tagName === 'VIDEO') {
    const vid = document.createElement('video');
    vid.src = media.currentSrc || media.src;
    vid.controls = true;
    vid.autoplay = true;
    box.appendChild(vid);
  }

  lightbox.classList.add('show');
});

// Close when clicking on the background or pressing the Esc key
lightbox.addEventListener('click', (e) => {
  if (e.target.classList.contains('backdrop')) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('show');
  box.innerHTML = '';
}
