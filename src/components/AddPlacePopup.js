import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpened, onClose, onPlaceSubmit }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleLinkChange(event) {
    setLink(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onPlaceSubmit({
      name,
      link
    })
  }

  return (
    <PopupWithForm
      name="add-post"
      title="Новое место"
      isOpened={isOpened && 'popup_opened'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          name="name"
          type="text"
          id="new-place-input"
          placeholder="Название"
          className="popup__input popup__input_type_place"
          minLength="2" maxLength="30"
          onChange={handleNameChange}
          required
        />
        <span className="popup__input-error" id="new-place-input-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          name="link"
          type="url"
          id="place-link-input"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          onChange={handleLinkChange}
          required
        />
        <span className="popup__input-error" id="place-link-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;