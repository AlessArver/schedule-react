import React, { FC } from 'react'
import classNames from 'classnames'

import './Toast.sass'
import { ToastState } from '../../flux/reducers/toast'

const Toast: FC<ToastState> = ({isToast, toastType, text}) => {
  return <div
    aria-live='polite'
    aria-atomic='true'
    className={classNames('toast', {'show': isToast, 'hide': !isToast}, toastType)}>
    <div className='toast-body'>
      {text}
    </div>
  </div>
}
export default Toast