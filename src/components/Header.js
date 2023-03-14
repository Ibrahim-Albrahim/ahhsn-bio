import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/bio-context';
import logo from '../assets/images/logo.png';
import toggleLogo from '../assets/images/toggleLogo.png';
import '../assets/scss/Header.scss';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };
  return (
    <header>
      <div className="toggle-btn-section">
        <div className={`toggle-checkbox m-vertical-auto`}>
          <input
            className="toggle-btn__input"
            type="checkbox"
            name="checkbox"
            onChange={handleThemeChange}
            checked={theme === 'light'}
          />
          <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
        </div>
        <img src={toggleLogo} alt='Dark mode toggle' />
      </div>
      <img src={logo} alt="logo" />
    </header>
  );
};
export default Header;