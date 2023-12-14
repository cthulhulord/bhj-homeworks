const tooltipButtons = [...document.getElementsByClassName('has-tooltip')];
let activeTooltip = 0;

tooltipButtons.forEach((item, index) => {
	const tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	tooltip.innerText = item.title;

	item.insertAdjacentElement('afterend', tooltip);

	item.addEventListener('click', (element) => {
		element.preventDefault();

		if (activeTooltip !== index) {
			tooltipButtons[activeTooltip].nextElementSibling.classList.remove('tooltip_active');
		} 

		tooltip.classList.toggle('tooltip_active');
		tooltip.style.left = `${item.getBoundingClientRect().left}px`;

		activeTooltip = index;
		console.log(activeTooltip);
	});
});