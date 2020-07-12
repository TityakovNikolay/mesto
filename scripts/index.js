let openPopupBtn = document.querySelector('.profile__edit');
let closePopupBtn = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let submitBtn = document.querySelector(".popup__btn-save");

function closeOpen(){
    popup.classList.toggle('popup__opened')
    if(popup.classList.contains("popup__opened")){
        nameInput.value = profileName.textContent;
        aboutInput.value = profileAbout.textContent;
    }
}
function submit() {
    let name = nameInput.value;
    let about = aboutInput.value;
  
    profileName.textContent = name;
    profileAbout.textContent = about;
    closeOpen();
}


openPopupBtn.addEventListener('click', closeOpen);
closePopupBtn.addEventListener("click", closeOpen);
submitBtn.addEventListener("click", submit)