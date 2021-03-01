import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import FormContent from './FormContent';

function Register({ onRegister }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const history = useHistory()

  function handleSubmit(evt) {
    evt.preventDefault()
    onRegister(email, password)
      .then(() => history.push('/signin'))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormContent setPassword={setPassword} setEmail={setEmail}/>
      <p className="form__login">Уже зарегистрированы?<Link to="/signin" className="form__login-link opacity"> Войти</Link></p>
    </form>
  )
}

export default Register;