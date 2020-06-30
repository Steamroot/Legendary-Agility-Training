//--------------------------------- Variables ---------------------------------------------------------------------------------------
const bodyElement = document.getElementById('page');

const openPopup = document.getElementsByName('popup-open');

const popupButton = document.getElementsByName('popup-button');

const closePopup = document.getElementsByClassName('popup__close');
//---------------------------------- Close info banner ------------------------------------------------------------------------------
document.getElementById('close-info-banner').addEventListener('click', () => {
    document.querySelector('.header__info-box').style.display = 'none';
});
//---------------------------------- Open the popup overlay --------------------------------------------------------------------------
for (let i = 0; i < popupButton.length; i++) {
    popupButton[i].addEventListener('click', () => {
        openPopup[i].style.cssText = 'visibility: visible; opacity: 1;';
        bodyElement.style.overflow = 'hidden';
    });
}
//---------------------------------- Close the popup overlay --------------------------------------------------------------------------
for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener('click', () => {
        openPopup[i].style.cssText = 'visibility: hidden; opacity: 0;';
        bodyElement.style.overflow = 'auto'
    });
}
