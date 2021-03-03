import FormContent from './FormContent.js';
import React from 'react'


function Login({ onLogin }) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    onLogin(email, password)
  }

  return (
    <FormContent
      password={password}
      email={email}
      setPassword={setPassword}
      setEmail={setEmail}
      onSubmit={handleSubmit}
      signIn
    />
  )
}

export default Login;