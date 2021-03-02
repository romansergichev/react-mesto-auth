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
    <form className="form" onSubmit={handleSubmit}>
      <FormContent setPassword={setPassword} setEmail={setEmail} signIn/> 
    </form>
  )
}

export default Login;