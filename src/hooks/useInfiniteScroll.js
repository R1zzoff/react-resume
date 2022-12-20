import { useEffect, useReducer, useRef, useCallback } from 'react'

//  reducer is imported
import { scrollerReducer } from '../helpers/Reducers';

//  Some variables are imported
import { SCROLLER } from '../helpers/Variables';

//  This custom hook is used in footer component
//  It is responsible for infinity scrolling.
//  Infinity scrolling is working only on PC for now.

const useInfiniteScroll = () =>
{
  const firstRender = useRef(true);

  const [state, dispatch] = useReducer(scrollerReducer, SCROLLER.INITIAL_STATE)

  const onScrollChange = useCallback(node =>
  {
    if (node !== null)
    {
      node.scrollLeft = state.scrollPosition;
    }
  }, [state.scrollPosition]);

  useEffect(() =>
  {
    dispatch({type: SCROLLER.ACTIONS.CHANGE_SCROLL,
              payload: 400})

    console.log('footer rendered');
  }, [])

  useEffect(() =>
  {
    console.log(`state.scrollPosition: ${state.scrollPosition}`);
    if(firstRender.current)
    {
      firstRender.current = false;

      return;
    }

    const updateScrollPos_Left = () =>
    {
      if(!state.rowDirection)
      {
        dispatch({type: SCROLLER.ACTIONS.CHANGE_DIRECTION,
                payload:
                {
                  scrollPosition: SCROLLER.LIMIT_MAX - 100,
                  min: SCROLLER.LIMIT_MIN,
                  max: SCROLLER.LIMIT_MAX
                }});
        //prev limit 900
        //new scroll position: 800
        //minLimit: 300; maxLimit: 900
      }
      else
      {
        dispatch({type: SCROLLER.ACTIONS.CHANGE_DIRECTION,
            payload:
            {
              scrollPosition: -SCROLLER.LIMIT_MIN - 100,
              min: -SCROLLER.LIMIT_MAX,
              max: -SCROLLER.LIMIT_MIN
            }});
        //prev limit 300
        //new scroll position: -400
        //minLimit: -900; maxLimit: -300;
      } 
    }

    const updateScrollPos_Right = () =>
    {
      if(!state.rowDirection)
      {
        dispatch({type: SCROLLER.ACTIONS.CHANGE_DIRECTION,
                payload:
                {
                  scrollPosition: 400,
                  min: SCROLLER.LIMIT_MIN,
                  max: SCROLLER.LIMIT_MAX
                }});
        //prev limit -300
        //new scroll position: 400
        //minLimit: 300; maxLimit: 900;
      }
      else
      {
        dispatch({type: SCROLLER.ACTIONS.CHANGE_DIRECTION,
                payload:
                {
                  scrollPosition: -(SCROLLER.LIMIT_MAX - 100),
                  min: -SCROLLER.LIMIT_MAX,
                  max: -SCROLLER.LIMIT_MIN
                }});
        //prev limit 900
        //new scroll position: -800
        //minLimit: -900, maxLimit: -300
      } 
    }

    // console.log('state.scrollPosition < state.limits.min',
    //              state.scrollPosition < state.limits.min);
    // console.log('state.scrollPosition > limits.state.limits.max',
    //              state.scrollPosition > state.limits.max);
    if(state.scrollPosition < state.limits.min)
    {
      updateScrollPos_Left();
    }
    else if(state.scrollPosition > state.limits.max)
    {
      updateScrollPos_Right();
    }
  }, [state.scrollPosition, state.rowDirection,
      state.limits.min, state.limits.max])

  // useEffect(() =>
  // {
  //     console.log(`state.limits.min - ${state.limits.min};
  //                  state.limits.max - ${state.limits.max}`);
  // },[state.limits])


  const wheelHandle = (e) =>
  {
      if (e.deltaY > 0)
      {
        dispatch({type: SCROLLER.ACTIONS.CHANGE_SCROLL,
                payload: state.scrollPosition + SCROLLER.SPEED})
      }
      else
      {
        dispatch({type: SCROLLER.ACTIONS.CHANGE_SCROLL,
                payload: state.scrollPosition - SCROLLER.SPEED})
      }
  }

  const mouseEnterHandle = () =>
  {
    document.documentElement.classList.add('no-scroll');
  }
  const mouseLeaveHandle = () =>
  {
    document.documentElement.classList.remove('no-scroll');
  }

  const onClickBracket = (scrollValue) =>
  {
    dispatch({type: SCROLLER.ACTIONS.CHANGE_SCROLL,
            payload: state.scrollPosition + scrollValue})
  }

  const onClickItem = (e) =>
  {
    e.target.scrollIntoView();

    const roundedScrollPosition = Math.round((e.target.parentElement.scrollLeft)/100) * 100
    const targetIndex = Array.from(e.target.parentElement.children).indexOf(e.target);

    e.target.classList.add('active')

    dispatch({type: SCROLLER.ACTIONS.CHANGE_ACTIVE,
            payload:
            {
              scrollPosition: roundedScrollPosition,
              active: targetIndex
            }})

    // console.log(Array.from(e.target.parentElement.children).indexOf(e.target));
  }

  return {state, onScrollChange, wheelHandle,
          mouseEnterHandle, mouseLeaveHandle,
          onClickBracket, onClickItem}
}

export default useInfiniteScroll
