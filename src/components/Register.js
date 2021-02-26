import FormContent from './FormContent.js';

function Register() {
  return (
    <form className="register">
      <FormContent />
      <p className="register__login">Уже зарегистрированы?<a href="/sign-in" className="form__login-link opacity"> Войти</a></p>
    </form>
  )
}

export default Register;