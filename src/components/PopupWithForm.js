function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpened}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button opacity"
          onClick={props.onClose}
        >
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}`} className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit} noValidate>
          {/* ^^^^name изменилось, и теперь соответствует типу формы
          TODO: изменить везде где использовался доступ по имени формы */}
          {props.children}
          <button type="submit" className="popup__submit-button">
            {props.name === 'confirm' ? 'Да' : 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;