let openPopupBtn = document.querySelector('.profile__edit');
let closePopupBtn = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__form');

function closeOpenPopup(){
    popup.classList.toggle('popup_opened');
    if(popup.classList.contains("popup_opened")){
        nameInput.value = profileName.textContent;
        aboutInput.value = profileAbout.textContent;
    }
}
function submit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeOpenPopup();
}


openPopupBtn.addEventListener('click', closeOpenPopup);
closePopupBtn.addEventListener("click",closeOpenPopup);
popupForm.addEventListener("submit", submit);