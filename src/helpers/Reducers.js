import { CANDY, SCROLLER } from "./Variables";
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

export const scrollerReducer = (state, action) =>
{
  switch (action.type)
  {
    case SCROLLER.ACTIONS.CHANGE_SCROLL:
    {
      return{
        ...state,
        scrollPosition: action.payload
      };
    }
    case SCROLLER.ACTIONS.CHANGE_DIRECTION:
    {
      return{
        ...state,
        rowDirection: !state.rowDirection,
        scrollPosition: action.payload.scrollPosition,
        limits:
        {
          min: action.payload.min,
          max: action.payload.max
        }
      };
    }
    case SCROLLER.ACTIONS.CHANGE_ACTIVE:
    {
      return{
        ...state,
        scrollPosition: action.payload.scrollPosition,
        active: action.payload.active
      }
    }
    default:
      return state;
  }
}