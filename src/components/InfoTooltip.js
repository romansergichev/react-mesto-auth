import success from '../images/icons/success.svg'
import fail from '../images/icons/fail.svg'

function InfoTooltip({ isOpened, onClose }) {
  const isSuccess = false;
  return (
    <div className={`tooltip ${isOpened && 'tooltip_opened'}`}>
      <div className="tooltip__container">
        <button
          type="button"
          className="tooltip__close-button opacity"
          onClick={onClose}
        >
        </button>
        <img className="tooltip__image" src={isSuccess ? success : fail} />
        <h2 className="tooltip__text">
          {
            isSuccess
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте ещё раз.'
          }
        </h2>
      </div>

    </div>
  )
}

export default InfoTooltip