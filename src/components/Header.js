import logo from '../assets/images/logo.png';
import '../assets/scss/Header.scss';
import Share from './Share';
import ModeToggler from './ModeToggler';

function Header() {
  return (
    <header>
      <ModeToggler />
      <Share />
      <img src={logo} alt="logo" />
    </header>
  );
};
export default Header;