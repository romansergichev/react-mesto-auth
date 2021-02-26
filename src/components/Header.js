import logo from '../images/icons/mesto-logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="./index.html" target="_self" className="header__logo-link">
        <img src={logo} alt="Логотип Место" className="header__logo opacity" />
      </a>
    </header>
  );
}

export default Header;