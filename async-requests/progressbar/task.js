const progress = document.getElementById('progress');
const form = document.forms.form;

form.addEventListener('submit', (item) => {
	item.preventDefault();

	let xhr = new XMLHttpRequest();

	xhr.upload.addEventListener('progress', (e) => {
		let currentProgress = e.loaded / e.total;
		progress.value = currentProgress;
	});

	xhr.upload.addEventListener('load', (e) => {
		alert('Ваш файл загружен!');
		if (window.confirm('Загрузить еще один файл?')) {
			progress.value = 0;
			document.querySelector('.input__wrapper-desc').textContent = 'Имя файла...';
		}
	});

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	const formData = new FormData(item.currentTarget);
	xhr.send(formData);
});

