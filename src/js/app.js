// const testModules = require('./test-module');
// require('../css/app.css');

// console.log(testModules.hello);

const openPopupButtons = document.querySelectorAll('.add-teacher-btn');
console.log(openPopupButtons);
const popupContainer = document.getElementById('popup-add-teacher');
const closePopupButton = document.getElementById('closePopupAddTeacher');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupContainer.style.display = 'flex';
    });
});

closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});


const openPopupDescriptionButtons = document.querySelectorAll('.teacher-card');
const closePopupButtonDesc = document.getElementById('closePopup');
const popupDescriptionContainer = document.getElementById('popup-description');

openPopupDescriptionButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupDescriptionContainer.style.display = 'flex';
    });
});

closePopupButtonDesc.addEventListener('click', () => {
    popupDescriptionContainer.style.display = 'none';
});

popupDescriptionContainer.addEventListener('click', (event) => {
    if (event.target === popupDescriptionContainer) {
        popupDescriptionContainer.style.display = 'none';
    }
});