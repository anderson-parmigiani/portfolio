import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import GoTop from './components/GoTop';


const App = () => {
  const [showGoTop, setShowGoTop] = useState("goTopHidden");
  const refScrollUp = useRef();

  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }

    const browserLanguage = navigator.language || navigator.languages[0];
    return browserLanguage.startsWith('es') ? 'es' : 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage());

  const handleVisibleButton = () => {
    const position = window.scrollY;

    if (position > 100) {
      setShowGoTop("goTop");
    } else {
      setShowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    handleVisibleButton();
    window.addEventListener("scroll", handleVisibleButton);

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  const setLanguageHandler = (lang) => {
    setLanguage(lang);
  };

  return (
    <div ref={refScrollUp}>
      <Header language={language} setLanguageHandler={setLanguageHandler} />
      <Content language={language} />
      <Footer language={language} />
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
    </div>
  );
}

export default App;
