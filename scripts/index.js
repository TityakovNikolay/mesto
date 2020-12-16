//попап редактирования профиля

const openPopupBtn = document.querySelector(".profile__edit");
const closePopupBtn = document.querySelector(".popup__btn-close");
const popupProf = document.querySelector(".popup-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupForm = document.querySelector(".popup__form");


function openPopup(popup){
    popup.classList.add("popup_opened");
}
function closePopup(popup){
  popup.classList.remove("popup_opened");
}
function profileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupProf);
}


openPopupBtn.addEventListener("click", function(){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupProf);
});
closePopupBtn.addEventListener("click",function(){
  closePopup(popupProf);
});
popupForm.addEventListener("submit", profileSubmitHandler);

//удаление карточек
function removeCard(){

  const delCardBtn = document.querySelectorAll(".places__btn-del");
  delCardBtn.forEach(function(item){
  
    item.addEventListener("click", function(evt){
      const eventTarget = evt.target;
      eventTarget.closest(".places__el").remove();
  });
  });
  };


//попап добавления карточки
const popupAddCard = document.querySelector(".popup-card");
const btnClose = popupAddCard.querySelector(".popup__btn-close");
const addCardBtn = document.querySelector(".profile__add-button");
const popupFormCard = popupAddCard.querySelector(".popup__form");
const cardInputName = popupAddCard.querySelector(".popup__input_type_name");
const cardInputLink = popupAddCard.querySelector(".popup__input_type_about");



const placesCard = document.querySelector("#places-card").content;
const places = document.querySelector(".places");




function submitCard(evt) {
  evt.preventDefault();
  const placesEl = placesCard.cloneNode(true);
  const placesImg = placesEl.querySelector(".places__img");
  const likeCardBtn = placesEl.querySelector(".places__btn-heart");
  likeCardBtn.addEventListener("click", function(evt){
    const eventTarget = evt.target;
    eventTarget.classList.toggle("places__btn-heart_type_active");
    
  });
  placesImg.src = cardInputLink.value;
  placesImg.alt = cardInputName.value;
  placesEl.querySelector(".places__name").textContent = cardInputName.value;
  places.prepend(placesEl);
  removeCard(); 
  openImage();
  closePopup(popupAddCard);
};

addCardBtn.addEventListener("click", function(){
  openPopup(popupAddCard);  
});
btnClose.addEventListener("click", function(){
  closePopup(popupAddCard);
});
popupFormCard.addEventListener("submit", submitCard);

//загрузка карточек на страницу
const initialCards = [
  {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

initialCards.forEach(function(item){
  const placesEl = placesCard.cloneNode(true);
  const likeCardBtn = placesEl.querySelector(".places__btn-heart");
  const placesImg = placesEl.querySelector(".places__img");
  likeCardBtn.addEventListener("click", function(evt){
    const eventTarget = evt.target;
    eventTarget.classList.toggle("places__btn-heart_type_active");
  });  
  const places = document.querySelector(".places");
  placesImg.src = item.link;
  placesImg.alt = item.name;
  placesEl.querySelector(".places__name").textContent = item.name;
  places.append(placesEl);
  removeCard();
});

//попап открытия картинки
const popupImage = document.querySelector(".popup_image");
const popupImg = popupImage.querySelector(".popup__img");
const popupImgCap = popupImage.querySelector(".popup__img-cap");
const imageClose = popupImage.querySelector(".popup__btn-close");

function openImage(){
const allCardsImg = document.querySelectorAll(".places__img");

allCardsImg.forEach(function(item){
  
  item.addEventListener("click", function(evt){
    const eventTarget = evt.target;
    openPopup(popupImage);
    popupImg.src = eventTarget.src;
    popupImgCap.textContent = eventTarget.alt;
    
     });
  });
}

openImage();

imageClose.addEventListener("click", function(){
  closePopup(popupImage);
});