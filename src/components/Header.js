import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/bio-context';
import logo from '../assets/images/logo.png';
import '../assets/scss/Header.scss';
import 'dark-mode-toggle';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="logo" />
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <dark-mode-toggle />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;