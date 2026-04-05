const userInput = document.querySelector('.movies__input');
const searchBtn = document.querySelector('.movies__search');

searchBtn.addEventListener('click', ()=>{
    if(userInput.value === ''){
        alert('Empty input');
    }

    console.log(userInput.value);
})

