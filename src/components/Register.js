import React from 'react'
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleEmailChange(evt) {
    // console.log(evt.target.value)
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    onRegister(email, password)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Регистрация</h1>
      <input
        id="email"
        className="form__input"
        name="email"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="form__input"
        name="password"
        type="password"
        placeholder="Пароль"
        onChange={handlePasswordChange}
      />
      <button className="form__button opacity">Зарегистрироваться</button>
      <p className="form__login">Уже зарегистрированы?<Link to="/signin" className="form__login-link opacity"> Войти</Link></p>
    </form>
  )
}

export default Register;