import { useState, useEffect } from "react"

//  This is an ActivationBtn component. It is used in Main component.
//  This components represents one button in Main component.
//  When four different ActivationBtn are pressed, the main window will show up.

const ActivationBtn = ({setActivatedBtns, style}) =>
{
  const [isActived, setIsActivated] = useState(false)

  useEffect(() =>
  {
    console.log('ActivationBtn is rendered');
  }, [])

  const clickHandle = () =>
  {
    if(!isActived)
    {
      setIsActivated(() => true);
      setActivatedBtns((current) => current + 1)
    }
  }
//
  return (
    <div className={isActived ? style.on : style.off} onClick={clickHandle}>
      <svg>
        <use href='svgs.svg#circle'></use>
      </svg>
    </div>
  )
}

export default ActivationBtn