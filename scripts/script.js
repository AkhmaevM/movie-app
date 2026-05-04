const userInput = document.querySelector('.movies__input');
const searchBtn = document.querySelector('.movies__search');

searchBtn.addEventListener('click', async () => {
    if (userInput.value === '') {
        alert('Empty input');
    }


    let response = await fetch(`http://www.omdbapi.com/?apikey=b83f90d7&t=${userInput.value}`);

    let text = await response.text(); // прочитать тело ответа как текст

    console.log(text.slice(0, 80) + '...');
    console.log(text);
})

