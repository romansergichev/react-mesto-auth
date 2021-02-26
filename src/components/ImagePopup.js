function ImagePopup(props) {

  return (
    <div className={`popup popup_type_photo background-opacity ${props.card.isOpened && 'popup_opened'}`}>
      <div className="popup__photo-container popup__photo-container">
        <button
          type="button"
          className="popup__close-button popup__close-button_position_corner opacity"
          onClick={props.onClose}
        >
        </button>
        <img src={props.card.link} alt={props.card.name} className="popup__post-image" />
        <h4 className="popup__post-title">{props.card.name}</h4>
      </div>
    </div>
  )
}

export default ImagePopup;