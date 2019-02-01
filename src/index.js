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

//Level - Average
const averageSection = document.querySelector('#main__task--two');

const showTasksAverage = () => {
    const popupAverage = document.querySelector('.popup__average');
    popupAverage.classList.add('activePopup')
}
averageSection.addEventListener('click', showTasksAverage);

//Level - Advanced
const advancedSection = document.querySelector('#main__task--three');

const showTasksAdvanced = () => {
    const popupAdvanced = document.querySelector('.popup__advanced');
    popupAdvanced.classList.add('activePopup')
}
advancedSection.addEventListener('click', showTasksAdvanced);

//Quiz section
//Beginner
const checkQuestions = document.querySelector('.popup__beginner--form');
const resultBeginner = document.querySelector('.progress__procent--beginner');
let progressProcent = 0;

const checkQuestionsFunction = () => {
    const popupBeginner = document.querySelector('.popup__beginner');
    const correctAnswers = document.querySelectorAll('.correct');
    const correctAnswersArray = [...correctAnswers]

    for (let i = 0; i < correctAnswersArray.length; i++) {
        if (correctAnswersArray[i].checked) {
            progressProcent += 20;
        }
    }
    localStorage.setItem('resultBeginner', progressProcent)
    resultBeginner.textContent = `${localStorage.getItem('resultBeginner')}%`;
    popupBeginner.classList.remove('activePopup');
}
if (localStorage.getItem('resultBeginner') >= 80) {
    resultBeginner.style.color = "green";
} else {
    resultBeginner.style.color = "red";
}
resultBeginner.textContent = `${localStorage.getItem('resultBeginner')}%`;
checkQuestions.addEventListener('submit', checkQuestionsFunction);

//Average
const checkQuestionsAverage = document.querySelector('.popup__average--form');
const resultAverage = document.querySelector('.progress__procent--average');
let progressProcentAverage = 0;

const checkQuestionsFunctionAverage = () => {
    const popupAverage = document.querySelector('.popup__average');
    const correctAnswers = document.querySelectorAll('.correct');
    const correctAnswersArray = [...correctAnswers]

    for (let i = 0; i < correctAnswersArray.length; i++) {
        if (correctAnswersArray[i].checked) {
            progressProcentAverage += 20;
        }
    }
    localStorage.setItem('resultAverage', progressProcentAverage);
    resultAverage.textContent = `${localStorage.getItem('resultAverage')}%`;
    popupAverage.classList.remove('activePopup');
}
if (localStorage.getItem('resultAverage') >= 60) {
    resultAverage.style.color = "green";
} else {
    resultAverage.style.color = "red";
}
resultAverage.textContent = `${localStorage.getItem('resultAverage')}%`;
checkQuestionsAverage.addEventListener('submit', checkQuestionsFunctionAverage);

//Advanced
const checkQuestionsAdvanced = document.querySelector('.popup__advanced--form');
const resultAdvanced = document.querySelector('.progress__procent--advanced');
let progressProcentAdvanced = 0;

const checkQuestionsFunctionAdvanced = () => {
    const popupAdvanced = document.querySelector('.popup__advanced');
    const correctAnswers = document.querySelectorAll('.correct');
    const correctAnswersArray = [...correctAnswers]

    for (let i = 0; i < correctAnswersArray.length; i++) {
        if (correctAnswersArray[i].checked) {
            progressProcentAdvanced += 20;
        }
    }
    localStorage.setItem('resultAdvanced', progressProcentAdvanced);
    resultAdvanced.textContent = `${localStorage.getItem('resultAdvanced')}%`;
    popupAdvanced.classList.remove('activePopup');
}
if (localStorage.getItem('resultAdvanced') >= 60) {
    resultAdvanced.style.color = "green";
} else {
    resultAdvanced.style.color = "red";
}
resultAdvanced.textContent = `${localStorage.getItem('resultAdvanced')}%`;
checkQuestionsAdvanced.addEventListener('submit', checkQuestionsFunctionAdvanced);

//Null - Problem (Results - First visit)
if (localStorage.hasOwnProperty('resultBeginner')) {} else {
    resultBeginner.textContent = `0%`;
}
if (localStorage.hasOwnProperty('resultAverage')) {} else {
    resultAverage.textContent = `0%`;
}
if (localStorage.hasOwnProperty('resultAdvanced')) {} else {
    resultAdvanced.textContent = `0%`;
}

//Certificate
const buttonCertificate = document.querySelector('.main__get--certificate');

if(localStorage.getItem('resultAdvanced') >= 60 && localStorage.getItem('resultAverage') >= 60 &&localStorage.getItem('resultBeginner') >= 80){
    buttonCertificate.classList.add('activePopup');
}

buttonCertificate.addEventListener('click', function(){
    const certificate = document.querySelector('.main__certificate');
    const name = document.querySelector('.main__certificate--name');
    name.textContent = localStorage.getItem('name');
    certificate.classList.toggle('activePopup');
})