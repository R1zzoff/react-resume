import { useEffect, useReducer } from "react";

import { CANDY } from "../../helpers/Variables";
import { candyReducer } from "../../helpers/Reducers";

import style from '../../styles/candy.module.scss'

const Candy = ({candyState, setCandyState, index}) =>
{
    const [state, dispatch] = useReducer(candyReducer, CANDY.INITIAL_STATE);

    const AnimationEndHandle = () =>
    {
        setCandyState((prevStates) => 
        {
            let copyOfStates = [...prevStates];
            copyOfStates[index] = false;

           return copyOfStates;
        });
    }

    useEffect(() =>
    {
        // console.log('Candy useEffect');
        !candyState && dispatch({ type: CANDY.ACTIONS.RESET })
    }, [candyState])

    const styles =
    {
        display: candyState ? 'block' : 'none',

        top: state.startTopValue ? '-20px' : 'calc(100% - 60px)',
        left: `${state.startXValue}px`,

        rotate: `${state.rotateValue}deg`,

        animationDuration: `${state.speed}s`
    }

    return(
        <div className={state.startTopValue ? style.candy_top : style.candy_bottom}
        style={styles} onAnimationEnd={AnimationEndHandle}>
            <svg>
                <use href={state.icon}></use>
            </svg>
        </div>
    )
}

export default Candy;