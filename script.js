document.querySelectorAll('.card').forEach(card => {
  const learnBtn = card.querySelector('.learn-more');
  const fullDesc = card.querySelector('.full-desc');
  const actions = card.querySelector('.actions');

  learnBtn.addEventListener('click', () => {
    fullDesc.classList.toggle('show');
    actions.classList.toggle('show');
    learnBtn.textContent = fullDesc.classList.contains('show') ? 'Hide' : 'Learn More';
  });
});

// Copy loadstring
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-loadstring');
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy Loadstring', 1500);
    });
  });
});
