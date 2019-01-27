import './sass/style.sass'

const sectionWelcome = document.querySelector('.welcome--page');
const welcomeInput = document.querySelector('.welcome--input');
const welcomeForm = document.querySelector('.welcome--form');

let nickName = welcomeInput.value;
let showNick = document.querySelector('.main--nick');


if (localStorage.hasOwnProperty('name')) {
    sectionWelcome.classList.add('loggedForm');
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


//Change avatar
const mainAvatar = document.querySelector('.main--avatar');

const avatarOne = document.querySelector('.change--avatarOne');
const avatarTwo = document.querySelector('.change--avatarTwo');
const placeHolderAvatar = document.querySelector('.placeholderAvatar');

avatarOne.addEventListener('click', function () {
    mainAvatar.style.backgroundImage = "url('images/avatar1.jpg')";
    placeHolderAvatar.classList.add("unActive");

    // const avatarFirst = document.createElement("img");
    // avatarFirst.setAttribute("src", 'images/avatar1.jpg');

    // localStorage.setItem('avatar', avatarFirst)
    // mainAvatar.style.backgroundImage = localStorage.getItem('avatar');
})
avatarTwo.addEventListener('click', function () {
    mainAvatar.style.backgroundImage = "url('images/avatar2.png')";
    placeHolderAvatar.classList.add("unActive");
})








welcomeForm.addEventListener('submit', welcomeUser);