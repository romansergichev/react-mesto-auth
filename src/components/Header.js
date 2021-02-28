import logo from '../images/icons/mesto-logo.svg';
import {Link } from 'react-router-dom';

function Header({ linkText, loggedIn }) {
  return (
    <header className="header">
      <Link to="/" target="_self" className="header__logo-link">
        <img src={logo} alt="Логотип Место" className="header__logo opacity" />
      </Link>
      <div className="header__login-container">
        {
          loggedIn
            ? <p className="header__user">email@email.com<Link to="/signin"className="header__exit">Выйти</Link></p>
            : <Link to={linkText === 'Вход' ? '/signin' : '/signup'} className="header__login opacity">{linkText}</Link>
        }
      </div>
    </header>
  );
}

export default Header;