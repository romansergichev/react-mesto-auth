import FormContent from './FormContent.js';
import React from 'react'
import { useHistory } from 'react-router-dom'


function Login({ onLogin }) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const history = useHistory()

  function handleSubmit(evt) {
    evt.preventDefault()
    onLogin(email, password)
      .then(() => history.push('/main'))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormContent setPassword={setPassword} setEmail={setEmail} signIn/> 
    </form>
  )
}

export default Login;