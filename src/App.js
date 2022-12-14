import { useState, useEffect } from "react";

import JsCookie from 'js-cookie'

import { CursorHoverContext } from "./helpers/Context";
import { THEMES, COOKIE_THEME } from './helpers/Variables.js';

import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
// import style from './main.module.scss'

function App()
{
  const InitialTheme = () =>
  {
    // console.log('InitialTheme');

    if(JsCookie.get(COOKIE_THEME.NAME))
    {
      // console.log('got theme from cookie');
      return THEMES[JsCookie.get(COOKIE_THEME.NAME)];
    }
    else
    {
      // console.log('no cookie, set theme n cookie');
      JsCookie.set(COOKIE_THEME.NAME, 1, { expires: COOKIE_THEME.EXPIRATION })
      return THEMES[1]
    }
  }
  
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(() => InitialTheme());

  useEffect(() =>
  {
    const UpdateTheme = () =>
    {
      // console.log('UpdateTheme');

      for(const themeEl in theme)
      {
          document.documentElement.style.setProperty(`--${themeEl}`, theme[themeEl]);
      }
    }

    UpdateTheme()
  }, [theme])

  useEffect(() =>
  {
    let renderInterval;

    if(JsCookie.get(COOKIE_THEME.NAME))
    {
      if(theme === THEMES[JsCookie.get(COOKIE_THEME.NAME)])
      {
        renderInterval = setInterval(() => setIsLoaded(() => true), 1000)
      }
    }
    // console.log('useEffect once');
    return () => clearInterval(renderInterval);
    
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [])

  return (
    <>
      <CursorHoverContext.Provider value={{isHovering, setIsHovering}}>
      {/* 
      <div className="main">
        
      </div> */}
      {isLoaded &&
        <> 
          <CustomCursor isHovering={isHovering}></CustomCursor>
          <Header themeControl={{theme, setTheme}}></Header>
        </>
      }
      </CursorHoverContext.Provider>
    </>
  );
}

export default App;
