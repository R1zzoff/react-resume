import { useState, useContext, useEffect } from "react";

import { CursorHoverContext } from "../helpers/Context";
import { getRandomBool } from "../helpers/Functions";

import Candy from "./header/Candy";
import ThemeSwitcher from "./header/ThemeSwitcher";

import style from '../styles/header.module.scss';

import {ReactComponent as Line} from './svg/Line.svg';

const Header = ({themeControl}) =>
{
    const {setIsHovering} = useContext(CursorHoverContext);
    const [candiesState, setCandiesState] = useState(
        [
            false,
            false,
            false,
            false,
            false
        ]);

        useEffect(() =>
        {
            console.log('header rendered');
        }, [])

    const handleClick = () =>
    {
        !candiesState.find(state => state === true) 
        &&  setCandiesState(() =>
            [
                getRandomBool(),
                getRandomBool(),
                getRandomBool(),
                getRandomBool(),
                getRandomBool()
            ]);
    }

    return(
        <header>
            <div className={style.welcome_container} 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleClick}>
                    
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