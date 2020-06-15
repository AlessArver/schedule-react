import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

import './Button.sass'

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: any
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({children, className, type, onClick, ...props}) => (
  <button
    onClick={onClick}
    className={classNames('btn button', className)}
    type={type}>
    {children}
  </button>
)
export default Button