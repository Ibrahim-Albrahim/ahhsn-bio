import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/scss/Header.scss';
import ModeToggler from './ModeToggler';

function Header() {
  return (
    <header>
      <ModeToggler />
      <img src={logo} alt="logo" />
    </header>
  );
};
export default Header;