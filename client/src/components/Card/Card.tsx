import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

import './Card.sass'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card: FC<CardProps> = ({children, className}) => (
  <div className={classNames('card my-card', className)}>
    {children}
  </div>
)
export default Card