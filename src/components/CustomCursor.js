import { useRef, useEffect } from 'react';

import style from '../styles/cursor.module.scss';

export const CustomCursor = ({isHovering}) =>
{
  const cursor = useRef(null);

  useEffect(() =>
  {
    const handleMouseMove = (e) =>
    {
      cursor.current.style.left = `${e?.pageX}px`;
      cursor.current.style.top = `${e?.pageY}px`;

      // console.log(`handleMouseMove pageX: ${e?.pageX}; pageY: ${e?.pageY};`);
    }

    document.addEventListener('mousemove', handleMouseMove);
      
    console.log('cursor rendered');

    return () => document.removeEventListener('mousemove', handleMouseMove);
  },[]);

  return(
    <div className={isHovering ? style.cursor_hover : style.cursor} ref={cursor}></div>
  )
}

export default CustomCursor;