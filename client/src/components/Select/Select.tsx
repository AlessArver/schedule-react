import React, { FC, ReactNode } from 'react'

import './Select.sass'

type SelectType = {
  children: ReactNode
}

const Select: FC<SelectType> = ({children}) => (
  <select className='form-control select'>
    {children}
  </select>
)
export default Select