(function() {

const places = document.querySelector('.places-list');
const addPopup = document.querySelector('.popup_add');
const editPopup = document.querySelector('.popup_edit');
const imagePopup = document.querySelector('.popup_image');
const editButton = document.querySelector('.user-info__edit-button');
const plusButton = document.querySelector('.user-info__button');
const editFullNameInput = document.querySelector('.popup__input_type_full-name');
const editJobInput = document.querySelector('.popup__input_type_job');
const addNameInput = document.querySelector('.popup__input_type_name');
const addLinkInput = document.querySelector('.popup__input_type_link-url');
const fullName = document.querySelector('.user-info__name');
const job = document.querySelector('.user-info__job');
const editForm = document.querySelector('.popup__form_edit');
const addForm = document.querySelector('.popup__form_add');
const exitImageButton = document.querySelector('.popup__close_image');


const popupWindowAdd = new Popup(addPopup);

plusButton.addEventListener('click', () => {
    popupWindowAdd.open();
    popupWindowAdd.setEventListeners();

});

//попап редактирования
const popupWindowEdit = new Popup(editPopup);
//экземпляр класса (редактирование информации о себе)
const formEdit = new UserInfo(fullName, job, editFullNameInput, editJobInput);

editButton.addEventListener('click', (e) => {
    formEditValidator.resetState();
    popupWindowEdit.open();
    popupWindowEdit.setEventListeners();
    //чтобы форма редактирования совпадала с написанным на странице


    formEdit.setUserInfo(fullName.textContent, job.textContent);


});

//попап с картинкой
const popupWindowUncrop = new Popup(imagePopup);

function createCard(item) {
    return new Card(item, popupWindowUncrop).create();

}

const cardList = new CardList(places, initialCards, createCard);
cardList.render();

editForm.addEventListener('submit', (e) => {
e.preventDefault();

formEdit.updateUserInfo(editFullNameInput.value, editJobInput.value);
popupWindowEdit.close();

});

const formEditValidator = new FormValidator(editForm);
formEditValidator.setEventListeners();

const formAddValidator = new FormValidator(addForm);
formAddValidator.setEventListeners();


const userAdd = new UserAdd(cardList);

const cardAddByUser = (e) => {
    e.preventDefault();
    userAdd.addBySubmit(addNameInput.value, addLinkInput.value);
    popupWindowAdd.close();



}

exitImageButton.addEventListener('click', popupWindowUncrop.close);

addForm.addEventListener('submit', cardAddByUser);

})();


/*REVIEW. Резюме.

Код на классы разбит.

Появляется ошибка в консоли при сабмите формы карточки.
Не до конца правильно сделана валидация формы профиля.


Что надо исправить.

+1. В значительной степени не соблюдаются стилевые правила написания кода. Надо это исправить.
(подробный комментарий в файле класса Card).

+2. При работе метода addBySubmit класса UserAdd в консоли появляется ошибка: ReferenceError: cardList is not define.
Надо это исправить и проверить после этого правильность валидации формы карточки (подробный комментарий в файле класса UserAdd).

+3. Нужно до конца правильной сделать валидацию формы профиля. Сейчас она работает правильно, когда Вы выходите из формы по сабмиту, но,
если выйти из формы по крестику, предварительно сделав информацию в полях невалидной, то при повторном входе в форму на ней видны
сообщения об ошибках, оставшиеся от предыдущего неправильного ввода и кнопка сабмита неактивна (см. снимок экрана "Снимок экрана в 2020-06-04 15-54-52.png"
в корне Вашего проекта), чего быть не должно, так как на форме при её открытии всегда находится валидная информация, перенесённая из элементов страницы.
Поэтому в слушателе открытия формы профиля. нужно производить удаление сообщений об ошибках и делать активной кнопку сабмита.
Это можно  сделать с помощью вызовов функции валидации форм в слушателе открытия формы профиля.


+4. Все файлы с расширением js надо поместить в отдельную папку в корне проекта.


Что надо лучше.

+1. Логичнее  обработчик открытия большого фото добавлять на элемент карточки, не используя делегтрование.
(подробный комментарий в этом файле).

_____________________________________________________________________________________________________________________________________________

REVIEW2. Резюме2.

Ошибки от предыдущей проверки исправлены, рекомендация учтена, но появилась неточность, которую надо исправить.

Что надо исправить.

+1.  Метод setEventListeners класса Popup задавать ни к чему, на крестик закрытия большого фото нужно просто добавить обработчик close
класса Popup в файле-точке входа в проект script.js. Использовать этот метод в классе Card нельзя (комментарии в файлах классов Popup и Card).


_____________________________________________________________________________________________________________________________________________

REVIEW3. Резюме3.

Добавить-то Вы добавили обработчик на крестик в script.js, а вызов его в классе Card не убрали. Я его закоментировала, посмотрите и разберитесь.

Работа принимается.

Желаю дальнейших успехов в обучении!


*/
