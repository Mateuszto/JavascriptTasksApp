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


const welcomeUser = () => {

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

const pickedOne = 'firstAvatar'
const pickedTwo = 'secAvatar'

const avatarSection = document.querySelector('.change--avatar');



if ((localStorage.hasOwnProperty('avatarFirst'))) {
    mainAvatar.style.backgroundImage = "url('images/avatar1.jpg')";
    placeHolderAvatar.classList.add("unActive");
    avatarSection.classList.add('unActive')
} else if ((localStorage.hasOwnProperty('avatarSec'))) {
    mainAvatar.style.backgroundImage = "url('images/avatar2.png')";
    placeHolderAvatar.classList.add("unActive");
    avatarSection.classList.add('unActive')
}

avatarOne.addEventListener('click', function () {
    mainAvatar.style.backgroundImage = "url('images/avatar1.jpg')";
    placeHolderAvatar.classList.add("unActive");
    localStorage.setItem('avatarFirst', pickedOne)
    avatarSection.classList.add('unActiveOpacity')
})
avatarTwo.addEventListener('click', function () {
    mainAvatar.style.backgroundImage = "url('images/avatar2.png')";
    placeHolderAvatar.classList.add("unActive");
    localStorage.setItem('avatarSec', pickedTwo)
    avatarSection.classList.add('unActiveOpacity')
})

welcomeForm.addEventListener('submit', welcomeUser);