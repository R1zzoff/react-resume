import { CANDY } from "./Variables";
import { getRandomInteger, getRandomBool, getRandomFloat } from "./Functions";

export const candyReducer = (state, action) =>
{
    // console.log('Candy useReducer');
    switch (action.type)
    {
        case CANDY.ACTIONS.RESET:
            {
                return{
                    startTopValue: getRandomBool(),
                    startXValue: getRandomInteger(CANDY.X_MIN, CANDY.X_MAX),
                    rotateValue: getRandomInteger(-CANDY.ROTATE_VALUE, CANDY.ROTATE_VALUE),
                    speed: getRandomFloat(CANDY.SPEED_MIN, CANDY.SPEED_MAX),
                    icon: CANDY.SVG[getRandomInteger(0, CANDY.SVG.length - 1)]
                }
            }
        default:
            return state;
    }
}