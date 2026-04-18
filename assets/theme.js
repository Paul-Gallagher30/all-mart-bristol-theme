document.documentElement.classList.remove('no-js');

document.addEventListener('change', (event) => {
  const select = event.target.closest('[data-sort-by]');
  if (!select) return;
  const form = select.closest('form');
  if (form) form.submit();
});
