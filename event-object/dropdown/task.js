const dropdownList = document.querySelector('.dropdown__list');
const dropdownButton = document.querySelector('.dropdown__value');
const dropdownListItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownButton.addEventListener('click', () => {
		dropdownList.classList.toggle('dropdown__list_active');
});

dropdownListItems.forEach((item, i) => {
    item.onclick = () => {
	    dropdownList.classList.remove('dropdown__list_active');
	    dropdownButton.textContent = dropdownListItems[i].textContent;
	    return false;
    };
});

// const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
// const dropdownButton = Array.from(document.querySelectorAll('.dropdown__value'));
// const dropdownListItems = Array.from(document.querySelectorAll('.dropdown__item'));

// dropdownButton.forEach((item, i) => {
// 	item.addEventListener('click', () => {
// 		dropdownList[i].classList.toggle('dropdown__list_active');
// 	});	
// });

// dropdownListItems.forEach((item, i) => {
//     item.onclick = () => {
// 	    item.closest('.dropdown__list').classList.remove('dropdown__list_active');
// 	    item.closest('.dropdown__value').textContent = dropdownListItems[i].textContent;
// 	    return false;
//     };
// });