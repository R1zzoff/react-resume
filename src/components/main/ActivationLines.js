import {ReactComponent as ActivationLineV} from '../svg/ActivationLine_v.svg';
import {ReactComponent as ActivationLineH} from '../svg/ActivationLine_h.svg';

import style from '../../styles/main/activationLines.module.scss';

const ActivationLines = ({active}) =>
{
  return(
    <>
      <div className={style.activationLine_l} style={{display: active && 'block'}}>
        <ActivationLineV></ActivationLineV>
      </div>
      <div className={style.activationLine_r} style={{display: active && 'block'}}>
        <ActivationLineV></ActivationLineV>
      </div>
      <div className={style.activationLine_t} style={{display: active && 'block'}}>
        <ActivationLineH></ActivationLineH>
      </div>
      <div className={style.activationLine_b} style={{display: active && 'block'}}>
        <ActivationLineH></ActivationLineH>
      </div>
    </>
  )
}

export default ActivationLines;
