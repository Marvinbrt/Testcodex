// Add fade-in effect when elements enter the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.strategy, .about, .principles, .trust').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Update copyright year
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
