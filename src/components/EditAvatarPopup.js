import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpened, onClose, onUpdateAvatar }) {
  const linkRef = React.useRef('')

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar(linkRef.current.value);
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpened={isOpened && 'popup_opened'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          ref={linkRef}
          name="link"
          type="url"
          id="avatar-link-input"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          required
        />
        <span className="popup__input-error" id="avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;