import { useState, useEffect } from "react"

//  This is an ActivationBtn component. It is used in Main component.
//  This components represents one button in Main component.
//  When four different ActivationBtn are pressed, the main window will show up.

const activatedSvgStyle =
{
  fill: 'var(--bgElement1)',
  stroke: 'transparent',
  animationIterationCount: 3
}

const activatedDivStyle =
{
  width: '2em',
  pointerEvents: 'none'
}

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

  return (
    <div className={style}  style={isActived ? activatedDivStyle : {}} onClick={clickHandle}>
      <svg style={isActived ? activatedSvgStyle : {}}>
        <use href='svgs.svg#circle'></use>
      </svg>
    </div>
  )
}

export default ActivationBtn;