const items = document.getElementById('items');

const loaderImage = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loaderImage.classList.remove('loader_active');

		let parseData = JSON.parse(xhr.responseText);

		Object.keys(parseData.response.Valute).forEach((element) => {
			const item = document.createElement('div');
			item.classList.add('item');

			console.log(element);

			const itemCode = document.createElement('div');
			itemCode.classList.add('item__code');
			const itemValue = document.createElement('div');
			itemValue.classList.add('item__value');
			const itemCurrency = document.createElement('div');
			itemCurrency.classList.add('item__currency');

			items.appendChild(item);
			item.appendChild(itemCode);
			item.appendChild(itemValue);
			item.appendChild(itemCurrency);

			itemCode.textContent = parseData.response.Valute[element].CharCode;
			itemValue.textContent = parseData.response.Valute[element].Value;
			itemCurrency.textContent = 'руб.';
		})
	}
});
