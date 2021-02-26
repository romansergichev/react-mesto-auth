function FormContent(props) {
  console.log(props.signIn)
  return (
    <>
      <p className="form__title">{props.signIn ? 'Вход' : 'Регистрация'}</p>
      <input
        className="form__input"
        name="email"
        type="email"
        placeholder="E-mail"
      />
      <input
        className="form__input"
        name="password"
        type="password"
        placeholder="Пароль"
      />
      <button className="form__button">{props.signIn ? 'Войти' : 'Зарегистрироваться'}</button>
    </>
  )
}

export default FormContent;