import { useEffect } from "react";

import useCandyEffect from "../hooks/useCandyEffect";

import Candy from "./header/Candy";
import ThemeSwitcher from "./header/ThemeSwitcher";
import {ReactComponent as Line} from './svg/Line.svg';

import style from '../styles/header.module.scss';

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