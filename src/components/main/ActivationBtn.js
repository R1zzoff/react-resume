import { useState, useEffect } from "react"

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