  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    loader.classList.remove('hidden');
    loader.removeAttribute('aria-hidden');

    requestAnimationFrame(() => {
      loader.classList.add('show');

      setTimeout(() => {
        loader.classList.remove('show');
        loader.classList.add('hidden');
        loader.setAttribute('aria-hidden', 'true');
      }, 3000); 
    });
  });