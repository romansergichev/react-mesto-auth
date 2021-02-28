import FormContent from './FormContent.js';
import {Link} from 'react-router-dom';

function Register() {
  return (
    <form className="form">
      <FormContent />
      <p className="form__login">Уже зарегистрированы?<Link to="/signin" className="form__login-link opacity"> Войти</Link></p>
    </form>
  )
}

export default Register;