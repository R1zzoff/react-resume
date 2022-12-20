import { useContext, useState } from "react";

import { CursorHoverContext } from "../helpers/Context";
import { getRandomBool } from "../helpers/Functions";

//  This custom hook is used in Header component.
//  It is responisble for the effect which occurs
//  when mouse enters and leaves welcome svg or when is touched on mobiles.

const useCandyEffect = () =>
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

  const candyEffect = () =>
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

  const handleMouseEnter = () =>
  {
    setIsHovering(true)
    candyEffect();
  }

  const handleMouseLeave = () =>
  {
    setIsHovering(false)
    candyEffect();
  }

  return { handleMouseEnter, handleMouseLeave,
          candiesState, setCandiesState};
}

export default useCandyEffect;