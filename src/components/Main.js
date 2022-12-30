import { useEffect, useState } from 'react';

import ActivationBtn from './main/ActivationBtn';
import ActivationLines from './main/ActivationLines';

import style from '../styles/main/main.module.scss';

//  Still in development!

//  This is a main component. In the beginning there are 4 buttons ('ActivationBtn'),
//  that need to be pressed. After this action the main window will appear
//  The window content depends on the selected item in the footer component

const Main = ({activatedBtns, setActivatedBtns}) =>
{
  const [activated, setActivated] = useState(false);

  useEffect(() =>
  {
    activatedBtns === 4 && setActivated(() => true);
  }, [activatedBtns])

  useEffect(() =>
  {
    console.log('Main is rendered');
  }, [])

  return(
    <div className={style.main}>
      <ActivationBtn style={style.circle_tl} setActivatedBtns={setActivatedBtns}></ActivationBtn>
      <ActivationBtn style={style.circle_tr} setActivatedBtns={setActivatedBtns}></ActivationBtn>
      <ActivationBtn style={style.circle_bl} setActivatedBtns={setActivatedBtns}></ActivationBtn>
      <ActivationBtn style={style.circle_br} setActivatedBtns={setActivatedBtns}></ActivationBtn>

      <ActivationLines active={activated}></ActivationLines>

      <div className={style.main_content} style={activated ? {opacity: 1, pointerEvents: 'auto'} : {}}>
        <span>In development</span>
      </div>

    </div>
  )
}

export default Main;