import { useEffect } from 'react';

import ActivationBtn from './main/ActivationBtn';

import style from '../styles/main.module.scss';

const Main = ({activatedBtns, setActivatedBtns}) =>
{
  useEffect(() =>
  {
    console.log('Main is rendered');
  }, [])

  return(
    <div className={style.main}>
      <ActivationBtn style={{off: style.circle_tl, on: style.circle_tl_active}} setActivatedBtns={setActivatedBtns}></ActivationBtn>
      <ActivationBtn style={{off: style.circle_tr, on: style.circle_tr_active}} setActivatedBtns={setActivatedBtns}></ActivationBtn>
      <ActivationBtn style={{off: style.circle_bl, on: style.circle_bl_active}} setActivatedBtns={setActivatedBtns}></ActivationBtn>
      <ActivationBtn style={{off: style.circle_br, on: style.circle_br_active}} setActivatedBtns={setActivatedBtns}></ActivationBtn>

      {/* <div className={style.main_content}></div> */}

    </div>
  )
}

export default Main;