function FormContent({setPassword, setEmail, signIn}) {
  console.log(signIn)

  function handleEmailChange(evt) {
    console.log(evt.target.value)
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  return (
    <>
      <p className="form__title">{signIn ? 'Вход' : 'Регистрация'}</p>
      <input
        className="form__input"
        name="email"
        type="email"
        placeholder="E-mail"
        onChange={handleEmailChange}
      />
      <input
        className="form__input"
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={handlePasswordChange}
      />
      <button className="form__button">{signIn ? 'Войти' : 'Зарегистрироваться'}</button>
    </>
  )
}

export default FormContent;