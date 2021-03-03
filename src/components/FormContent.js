function FormContent(props) {

  function handleEmailChange(evt) {
    props.setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    props.setPassword(evt.target.value)
  }

  return (
    <form className="form" onSubmit={props.onSubmit}>
      <p className="form__title">{props.signIn ? 'Вход' : 'Регистрация'}</p>
      <input
        className="form__input"
        name="email"
        type="email"
        placeholder="E-mail"
        value={props.email}
        onChange={handleEmailChange}
      />
      <input
        className="form__input"
        name="password"
        type="password"
        placeholder="Пароль"
        value={props.password}
        onChange={handlePasswordChange}
      />
      <button className="form__button">{props.signIn ? 'Войти' : 'Зарегистрироваться'}</button>
      {props.children}
    </form>
  )
}

export default FormContent;