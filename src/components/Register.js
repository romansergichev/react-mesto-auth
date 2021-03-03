import React from 'react'
import { Link } from 'react-router-dom';
import FormContent from './FormContent';

function Register({ onRegister }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    onRegister(email, password)
  }

  return (
    <FormContent
      password={password}
      email={email}
      setPassword={setPassword}
      setEmail={setEmail}
      onSubmit={handleSubmit}
    >
      <p className="form__login">Уже зарегистрированы?<Link to="/sign-in" className="form__login-link opacity"> Войти</Link></p>
    </FormContent>
  )
}

export default Register;