const modal = document.querySelector('.modal');

modal.addEventListener('click', (e) => {
  if (e.target.className == 'btn-modal-close' || e.target.className == 'modal active') {
    modal.classList.remove('active');
  }
});