//попап редактирования профиля

const openPopupBtn = document.querySelector('.profile__edit');
const closePopupBtn = document.querySelector('.popup__btn-close');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupForm = document.querySelector('.popup__form');


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

//лайки и удаление карточек
function delAndLikeCard(){

  const delCardBtn = document.querySelectorAll(".places__btn-del");
  delCardBtn.forEach(function(item){
  
    item.addEventListener("click", function(evt){
      let eventTarget = evt.target;
      eventTarget.closest(".places__el").remove();
  });
  });
  
  const likeCardBtn = document.querySelectorAll(".places__btn-heart");
  likeCardBtn.forEach(function(item){
  
    item.addEventListener("click", function(evt){
      let eventTarget = evt.target;
      eventTarget.classList.toggle("places__btn-heart_type_active");
  });
  });
  };

//попап добавления карточки
const popupAddCard = document.querySelector('.popup-card');
const btnClose = popupAddCard.querySelector(".popup__btn-close");
const addCardBtn = document.querySelector(".profile__add-button");
const popupFormCard = popupAddCard.querySelector(".popup__form");
const cardInputName = popupAddCard.querySelector('.popup__input_type_name');
const cardInputLink = popupAddCard.querySelector('.popup__input_type_about');


function closeOpenPopupCard(){
  popupAddCard.classList.toggle('popup_opened');
}


const placesCard = document.querySelector('#places-card').content;

function submitCard(evt) {
  evt.preventDefault();
  const placesEl = placesCard.cloneNode(true);  
  const places = document.querySelector('.places');
  placesEl.querySelector('.places__img').src = cardInputLink.value;
  placesEl.querySelector('.places__name').textContent = cardInputName.value;

places.prepend(placesEl);
delAndLikeCard();
closeOpenPopupCard();
}

addCardBtn.addEventListener("click", closeOpenPopupCard);
btnClose.addEventListener("click", closeOpenPopupCard);
popupFormCard.addEventListener("submit", submitCard);

//загрузка карточек на страницу
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function(item){
  const placesEl = placesCard.cloneNode(true);  
  const places = document.querySelector('.places');
  placesEl.querySelector('.places__img').src = item.link;
  placesEl.querySelector('.places__name').textContent = item.name;
  places.append(placesEl);
});
delAndLikeCard();

