let counter = document.getElementById('clicker__counter');
let image = document.getElementById('cookie');

console.log(typeof counter.textContent);

function clickAction() {
	counter.textContent = +counter.textContent + 1;
	console.log(counter.textContent);

	if (image.width === 200) {
		image.width = 250;
	} else {
		image.width = 200;
	}
}

image.addEventListener('click', clickAction);