import './sass/style.sass'

const sectionWelcome = document.querySelector('.welcome--page');
const welcomeInput = document.querySelector('.welcome--input');
const welcomeForm = document.querySelector('.welcome--form');

let nickName = welcomeInput.value;
let showNick = document.querySelector('.main--nick');


if (localStorage.hasOwnProperty('name')) {
    sectionWelcome.classList.add('unactiveForm');
    showNick.textContent = localStorage.getItem('name');
}


const welcomeUser = (e) => {
    e.preventDefault();

    if (welcomeInput.value === "") {
        return false
    } else {
        sectionWelcome.classList.add('unactiveForm');
        localStorage.setItem('name', welcomeInput.value)
        showNick.textContent = localStorage.getItem('name');
    }
}

welcomeForm.addEventListener('submit', welcomeUser);