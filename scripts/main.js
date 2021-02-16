let profile = document.querySelector('.profile');
// Выберите элементы, куда должны быть вставлены значения полей
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__occupation');

let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit');
let popupCloseButton = popup.querySelector('.popup__close');

// Находим форму в DOM
let formElement = popup.querySelector('.popup__form');

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_occupation');

let openPopup = function() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;  
}

let closePopup = function() {
    if(popup.classList.contains('popup_opened')){
        popup.classList.remove('popup_opened');
    }
}

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    let nameVal = nameInput.value;
    let jobVal = jobInput.value;
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameVal;
    profileJob.textContent = jobVal;
    closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);