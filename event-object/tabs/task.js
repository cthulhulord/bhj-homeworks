const tabs = Array.from(document.querySelectorAll('.tabs'));

tabs.forEach((item, i) => {
    let tabContainer = Array.from(tabs[i].children);
    
    let tab = Array.from(tabContainer[0].children);
    let tabContent = Array.from(tabContainer[1].children);

    tab.forEach((item, i) => {
        item.addEventListener('click', () => {
            for (let x = 0; x < tab.length; x++) {
                tab[x].classList.remove('tab_active');
            };

            tab[i].classList.toggle('tab_active');
            
            tabIndex = tab.indexOf(item);

            for (let x = 0; x < tabContent.length; x++) {
                tabContent[x].classList.remove('tab__content_active')
            };

            tabContent[tabIndex].classList.toggle('tab__content_active');
        });
    });
});
