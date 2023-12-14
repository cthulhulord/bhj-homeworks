const tooltipButtons = [...document.getElementsByClassName('has-tooltip')];
const tooltip = document.createElement('div');

tooltip.classList.add('tooltip');

console.log(tooltipButtons);

tooltipButtons.forEach((item) => {
	item.addEventListener('click', (element) => {
		element.preventDefault();
		tooltip.classList.remove('tooltip_active');

		tooltip.innerText = item.title;
		tooltip.classList.add('tooltip_active');
		tooltip.style.left = `${item.getBoundingClientRect().left}px`;

		item.insertAdjacentElement('afterend', tooltip);

	});
});

