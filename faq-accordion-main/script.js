// script.js

const accordionButtons = document.querySelectorAll('.accordion-question');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Collapse all
    accordionButtons.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('.icon').src = './assets/images/icon-plus.svg';
      const content = document.getElementById(btn.getAttribute('aria-controls'));
      content.hidden = true;
    });

    // If it was already open, stop here (we just closed it)
    if (isExpanded) return;

    // Expand selected
    button.setAttribute('aria-expanded', 'true');
    button.querySelector('.icon').src = './assets/images/icon-minus.svg';
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    answer.hidden = false;
  });

  // Allow toggling with Enter or Space for accessibility
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});