const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    reveal.forEach( (item) => {
        const coordinates = item.getBoundingClientRect();
        if (coordinates.bottom < 0 || coordinates.top > window.innerHeight) {
            item.classList.remove('reveal_active')
        } else {
            item.classList.add('reveal_active'); 
        };
    });
});