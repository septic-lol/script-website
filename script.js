// Show full description when Learn More is clicked
document.querySelectorAll('.card').forEach(card => {
    const learnBtn = card.querySelector('.learn-more');
    const fullDesc = card.querySelector('.full-desc');
    const actions = card.querySelector('.actions');

    learnBtn.addEventListener('click', () => {
        fullDesc.classList.toggle('hidden');
        actions.classList.toggle('hidden');
        learnBtn.textContent = fullDesc.classList.contains('hidden') ? 'Learn More' : 'Hide';
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
