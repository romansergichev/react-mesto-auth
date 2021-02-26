import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js'

function EditProfilePopup({ isOpened, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpened={isOpened && 'popup_opened'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          name="username"
          type="text"
          id="profile-name-input"
          className="popup__input popup__input_type_name"
          minLength="2" maxLength="40"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__input-error" id="profile-name-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          name="description"
          type="text"
          id="profile-description-input"
          className="popup__input popup__input_type_description"
          minLength="2" maxLength="200"
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error" id="profile-description-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;