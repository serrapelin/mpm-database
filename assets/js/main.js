const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const papers = document.querySelectorAll('[data-paper-type]');
if (filterButtons.length && papers.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      papers.forEach((paper) => {
        const show = filter === 'all' || paper.dataset.paperType === filter;
        paper.style.display = show ? 'block' : 'none';
      });
    });
  });
}
