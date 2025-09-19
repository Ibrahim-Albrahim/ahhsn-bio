import { useState } from 'react';
import './assets/scss/App.scss';
import MyLink from './components/MyLink';
import SeachBar from './components/SearchBar';
import Header from './components/Header';
import { ThemeContext } from './contexts/bio-context'
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

function App() {
  // Detecting the default theme
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className=' ahhsn-bio'>
          <div className='background' ></div>
          <div className='content'>
            <Header />
            <SocialLinks />
            <SeachBar />
            <MyLink />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
