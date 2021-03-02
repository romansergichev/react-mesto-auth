import logo from '../images/icons/mesto-logo.svg';
import { Link } from 'react-router-dom';

function Header({ linkText, loggedIn, email, onSignOut }) {
  return (
    <header className="header">
      <Link to="/" target="_self" className="header__logo-link">
        <img src={logo} alt="Логотип Место" className="header__logo opacity" />
      </Link>
      <div className="header__login-container">
        {
          loggedIn
            ? <p className="header__user">{email + ' '}
                <Link to="/sign-in" className="header__exit opacity" onClick={onSignOut}>Выйти</Link>
              </p>
            : <Link to={linkText === 'Вход' ? '/sign-in' : '/sign-up'} className="header__login opacity">{linkText}</Link>
        }
      </div>
    </header>
  );
}

export default Header;