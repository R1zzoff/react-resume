import { useEffect } from "react";

import useCandyEffect from "../hooks/useCandyEffect";

import Candy from "./header/Candy";
import ThemeSwitcher from "./header/ThemeSwitcher";
import {ReactComponent as Line} from './svg/Line.svg';

import style from '../styles/header.module.scss';

// This is a header component. It's created with flex container with 2 main children
//--------------------------------------------------------------------------------
//  Left one is 'Welcome' child. Text 'welcome' is actually a svg file and not just a text
//  Added little feature, when mouse enter or leave 'welcome' div,
//  There will be elements flying around in the background
//--------------------------------------------------------------------------------
//  Right child consists of 2 elements: A span 'created by...' and svg line gradient.
//--------------------------------------------------------------------------------
//  Also separated from this 2 children there is a 'ThemeSwitcher' component
//  It is responsible for changing the color theme of the website.

const Header = ({themeControl}) =>
{
  const { handleMouseEnter, handleMouseLeave,
          candiesState, setCandiesState } = useCandyEffect()

  useEffect(() =>
  {
    console.log('header rendered');
  }, [])

  return(
    <header>
      <div className={style.welcome_container} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseEnter}>
        <div className={style.welcome_overflow}>
          <div className={style.candyZone_abs}>
            <div className={style.candyZone_container}>
              {
                candiesState.map((candyState, index = 0) =>
                <Candy key={index} candyState={candyState}
                setCandyState={setCandiesState} index={index++}></Candy>)
              }
            </div>
          </div>

          <svg className={style.welcome}>
            <use href='svgs.svg#welcome'></use>
          </svg>
        </div>
      </div>

      <div className={style.createdBy_container}>
        <span className={style.createdBy}>_created by Rostislav Rizov</span>
        <Line></Line>
      </div>
      <ThemeSwitcher themeControl={themeControl}></ThemeSwitcher>
  </header>
  )
}

export default Header;