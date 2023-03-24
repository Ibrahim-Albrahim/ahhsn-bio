import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/scss/Header.scss';
import Share from './Share';
import ModeToggler from './ModeToggler';
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <header>
      <ModeToggler />
      <Share />
      <img src={logo} alt="logo" />
      <SocialLinks />
    </header>
  );
};
export default Header;