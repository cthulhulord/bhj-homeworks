const book = document.querySelector('.book');
const fontSize = Array.from(document.querySelectorAll('.font-size'));

fontSize.forEach ((item) => {
    item.onclick = () => {
        for(let i = 0; i < fontSize.length; i++) {
            fontSize[i].classList.remove('font-size_active');
        };

        item.classList.toggle('font-size_active');

        if (fontSize[0].classList.contains('font-size_active')){
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        };

        if (fontSize[1].classList.contains('font-size_active')){
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        };

        if (fontSize[2].classList.contains('font-size_active')){
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        };

        return false;
    };
});