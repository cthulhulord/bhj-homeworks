const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let parseData = JSON.parse(xhr.responseText);

        pollTitle.textContent = parseData.data.title;
        const pollAnswersOptions = parseData.data.answers;

        for (let i = 0; i < pollAnswersOptions.length; i++) {
            const pollAnswersOption = document.createElement('button');
            pollAnswersOption.classList.add('poll__answer');
            pollAnswersOption.textContent = pollAnswersOptions[i];
            pollAnswers.appendChild(pollAnswersOption);

            pollAnswersOption.addEventListener('click', () => {
                alert('Спасибо, Ваш голос засчитан!');
            });
        }        
    }
});