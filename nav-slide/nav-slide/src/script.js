// example 2
VANTA.WAVES({
  el: '#wave',
  color: 0x111111,
  waveHeight: 20,
  shininess: 50,
  waveSpeed: 1.5,
  zoom: 0.75});

// Slide Fade
const items = document.querySelectorAll('.item')
const options = {
  threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)

items.forEach(item => {
  observer.observe(item);
})