import { useContext, useState } from 'react';

import JsCookie from 'js-cookie'

import { CursorHoverContext } from "../../helpers/Context";
import { THEMES, COOKIE_THEME } from "../../helpers/Variables";

import style from '../../styles/themeSwitcher.module.scss';

//  This is a ThemeSwitcher component. It is used in Header component.
//  It is responsible for toggling the theme.
//---------------------------------------------------------------------
//  It consist of 3 main elements:
//    Sun element that shows when it is light theme,
//    Moon element that shows when it is dark theme,
//    And decorative line that 'connects' these two elements.

const ThemeSwitcher = ({themeControl}) =>
{
  const {theme, setTheme} = themeControl;

  const {setIsHovering} = useContext(CursorHoverContext);

  //True - sun
  //False - moon
  const [switchPosition, setSwitchPosition] = useState(() => theme === THEMES[0]);

  const clickHandle = (inputSwitchPos) =>
  {
    //THEMES[0] => THEMES_LIGHT
    //THEMES[1] => THEMES_DARK
    setSwitchPosition(() => inputSwitchPos)
    theme === THEMES[1] ? changeTheme(0) : changeTheme(1)
  }

  const changeTheme = (inputThemeIndex) =>
  {
    setTheme(() => THEMES[inputThemeIndex])
    JsCookie.set(COOKIE_THEME.NAME, inputThemeIndex, { expires: COOKIE_THEME.EXPIRATION })
  }

  return(
    <>
      <div className={switchPosition ? style.themeSwitcher_sun : style.themeSwitcher_moon}>
        <div className={style.themeSwitcher_content}>

          <div className={style.lightTheme}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => clickHandle(false)}>
            <svg >
              <use href='svgs.svg#theme_Sun'></use>
            </svg>
          </div>

          <svg className={style.line}>
            <use href='svgs.svg#theme_line'></use>
          </svg>

          <div className={style.darkTheme}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => clickHandle(true)}>
            <svg>
              <use href='svgs.svg#theme_Moon'></use>
            </svg>
          </div>
            
        </div>
      </div>
    </>
  );
}

export default ThemeSwitcher;