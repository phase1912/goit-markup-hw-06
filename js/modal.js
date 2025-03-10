const modal = document.querySelector('[data-modal]');
const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}