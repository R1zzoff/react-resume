import { useContext, useState } from "react";

import { CursorHoverContext } from "../helpers/Context";
import { getRandomBool } from "../helpers/Functions";

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