const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

let modalCookie = localStorage.getItem('modalStatus');

if (modalCookie !== 'closed') {
	modal.classList.add('modal_active');
};

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	localStorage.setItem('modalStatus', 'closed');
})
