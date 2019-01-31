import './sass/style.sass'

const sectionWelcome = document.querySelector('.welcome__page');
const welcomeInput = document.querySelector('.welcome__page--input');
const welcomeForm = document.querySelector('.welcome__page--form');

let nickName = welcomeInput.value;
let showNick = document.querySelector('.main__page--nick');


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
const mainAvatar = document.querySelector('.main__page--avatar');
const avatarOne = document.querySelector('.change__avatar--one');
const avatarTwo = document.querySelector('.change__avatar--two');
const placeHolderAvatar = document.querySelector('.placeholderAvatar');

const pickedOne = 'firstAvatar'
const pickedTwo = 'secAvatar'

const avatarSection = document.querySelector('.change__avatar');



if ((localStorage.hasOwnProperty('avatarFirst'))) {
    mainAvatar.style.backgroundImage = "url('images/avatar1.jpg')";
    placeHolderAvatar.classList.add("unActive");
    avatarSection.classList.add('unActive')
} else if ((localStorage.hasOwnProperty('avatarSec'))) {
    mainAvatar.style.backgroundImage = "url('images/avatar2.png')";
    placeHolderAvatar.classList.add("unActive");
    avatarSection.classList.add('unActive')
} else console.log('Error - ChooseAvatar');

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
//Login listener
welcomeForm.addEventListener('submit', welcomeUser);

//Notes

const notesText = document.querySelector('.main__notebook--notes');
const saveButton = document.querySelector('.save__notes');

saveButton.addEventListener('click', function () {
    localStorage.setItem('notes', notesText.value);
})
notesText.value = localStorage.getItem('notes');

//Level - Beginner
const beginnerSection = document.querySelector('#main__task--one');

const showTasksBeginner = () => {
    const popupBeginner = document.querySelector('.popup__beginner');
    popupBeginner.classList.add('activePopup')
}

beginnerSection.addEventListener('click', showTasksBeginner);

//Quiz section
const checkQuestions = document.querySelector('.popup__beginner--form');
const progressSpan = document.querySelector('.progress__procent--beginner');

const checkQuestionsFunction = (e) => {
    e.preventDefault();
    const resultBeginner = document.querySelector('.progress-procent--beginner');
    const correctAnswers = document.querySelectorAll('.correct');
    const correctAnswersArray = [...correctAnswers]
    let progressProcent = 0;

    for(let i=0; i<correctAnswersArray.length; i++){
        if(correctAnswersArray[i].checked){
            progressProcent += 20;
        }
    }

    alert(`Result: ${progressProcent} %`);
}

checkQuestions.addEventListener('submit', checkQuestionsFunction);