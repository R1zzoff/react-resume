import useInfiniteScroll from '../hooks/useInfiniteScroll';

import Item from './footer/Item';
import {ReactComponent as ScrollerBg} from './svg/ScrollerBg.svg';

import { SCROLLER } from '../helpers/Variables';

import style from '../styles/footer.module.scss';

//  Still in development!

//  This is a footer component. It consist of 2 'sliders'.
//  Main 'slider' is a 'slider' with different elements that are imported from outside.
//  I use custom hook to create infinity scrolling for main 'slider'.
//  It works only on PC for now.
//  Also there is 2 brackets on the left and right side of the 'slider'
//  These 2 brackets are acutally a buttons that can be pressed to scroll
//  ----------------------------------------------------------------------------------
//  Secondary 'slider' depends on selected element in main 'slider'.

const Footer = ({activatedBtns}) =>
{

  const {state, onScrollChange, wheelHandle,
        mouseEnterHandle, mouseLeaveHandle,
        onClickBracket, onClickItem} = useInfiniteScroll()

  return(
    <footer className={activatedBtns === 4 ? style.footer : style.footer_disabled}>
      <div className={style.secondarySlider}></div>
      <div className={style.mainSlider_add}>
        <div className={style.mainSlider_add_content}>
          <ScrollerBg/>
          <button onClick={() => onClickBracket(-SCROLLER.SPEED)}
          className={style.leftBracket}>&#123;</button>
          <button onClick={() => onClickBracket(SCROLLER.SPEED)}
          className={style.rightBracket}>&#125;</button>
        </div>
      </div>
      <div className={style.mainSlider} ref={onScrollChange}
        onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}
        onWheel={wheelHandle}
        style={{flexDirection: state.rowDirection ? 'row' : 'row-reverse'}}>
          {
            state.allItems.map((item, keyIndex = 0) =>
            <Item key={keyIndex} name={item.NAME} onClickHandle={onClickItem}
            style={state.active === keyIndex
                ? style.sliderItem_active
                : style.sliderItem}/>)
          }
      </div>
    </footer>
  )
}

export default Footer;