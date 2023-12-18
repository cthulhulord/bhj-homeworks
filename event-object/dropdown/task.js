const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownButton = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownListItems = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownButton.forEach((item, i) => {
	item.addEventListener('click', () => {
		dropdownList[i].classList.toggle('dropdown__list_active');

		dropdownListItems.forEach((element, j) => {
		    element.addEventListener('click', (event) => {
		    	event.preventDefault();
			    element.closest('.dropdown__list').classList.remove('dropdown__list_active');
			    element.closest('.dropdown__list').previousElementSibling.textContent = element.textContent;
			});  
		});

	});	

});
