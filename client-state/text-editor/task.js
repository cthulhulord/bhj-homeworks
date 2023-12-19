const inputField = document.getElementById('editor');

const clearButton = document.getElementById('clear-button');

inputField.addEventListener('input', () => {
	localStorage.setItem('inputValue', inputField.value);
	console.log('=')
});

localStorage.getItem('inputValue');

clearButton.addEventListener('click', () => {
	inputField.value = '';
	localStorage.removeItem('inputValue');
})