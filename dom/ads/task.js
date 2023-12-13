const adCards = Array.from(document.querySelectorAll('.rotator'));

adCards.forEach((item) => {
    let adLines = Array.from(item.children);
    let i = 0;

    setInterval(() => {
        if (i < adLines.length) {
            adLines[i].classList.remove('rotator__case_active');
            i++;
            if (i === adLines.length) {
                adLines[0].classList.add('rotator__case_active');
                i = 0;
            };
            adLines[i].classList.add('rotator__case_active');
        };
    }, 1000);
});