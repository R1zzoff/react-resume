import { useRef, useEffect } from 'react';

import style from '../styles/cursor.module.scss';

export const CustomCursor = ({isHovering}) =>
{
    const cursor = useRef(null);

    useEffect(() =>
    {
        const handleMouseMove = (e) =>
        {
            cursor.current.style.left = `${e.clientX}px`;
            cursor.current.style.top = `${e.clientY}px`;
        }

        document.addEventListener('mousemove', handleMouseMove);
        
        console.log('cursor rendered');
    },[]);

    return(
        <div className={isHovering ? style.cursor_hover : style.cursor} ref={cursor}></div>
    )
}

export default CustomCursor;