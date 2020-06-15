import React, { FC } from 'react'
import s from './Toast.module.css'

type ToastProps = {
  text: string
}

const Toast: FC<ToastProps> = ({text}) => {
  return <>
    <div aria-live='polite' aria-atomic='true' className={s.toastWrapper}>
      <div className={`toast ${s.toast}`}>
        <div className='toast-body'>
          {text}
        </div>
      </div>
    </div>
  </>
}
export default Toast