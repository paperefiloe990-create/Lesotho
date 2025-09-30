/*GALLERY PAGE JS */

const imgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lImg = document.getElementById('lightbox-img');
const lCap = document.getElementById('lightbox-caption');
const close = document.getElementById('close-lightbox');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    lImg.src = img.src;
    lCap.textContent = img.dataset.caption || img.alt;
    lightbox.classList.remove('hidden');
  });
  // Hover 
  
  img.addEventListener('mouseenter', ()=> img.style.transform='scale(1.05)');
  img.addEventListener('mouseleave', ()=> img.style.transform='scale(1)');
});

close.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.classList.add('hidden'); });

// Filter Buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.gallery-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.category;
    items.forEach(item => {
      item.style.display = (cat === 'all' || item.dataset.category === cat) ? 'block' : 'none';
    });
  });
});

// Update footer year
document.getElementById('year3').textContent = new Date().getFullYear();
