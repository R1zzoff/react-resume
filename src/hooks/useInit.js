import { useState, useEffect } from "react";

//  Importing js-cookie plugin
import JsCookie from 'js-cookie';

import { THEMES, COOKIE_THEME } from "../helpers/Variables";

//  This custom hook is used in 'app' component
//  It is responsible for theme changing and saving a cookie with the new theme.
//  Also says when everything is loaded.

const useInit = () =>
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

  return { theme, setTheme, isLoaded };
}

export default useInit;