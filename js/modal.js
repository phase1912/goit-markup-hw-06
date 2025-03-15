const modal = document.querySelector('[data-modal]');
const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

const mobileModal = document.querySelector('[data-mobile]');
const mobileOpenButton = document.querySelector('[data-mobile-open]');
const mobileCloseBtn = document.querySelector('[data-mobile-close]');

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

mobileOpenButton.addEventListener('click', toggleModalMobile);
mobileCloseBtn.addEventListener('click', toggleModalMobile);

function toggleModal() {
    modal.classList.toggle('is-open');
}

function toggleModalMobile() {
    mobileModal.classList.toggle('is-open');
}