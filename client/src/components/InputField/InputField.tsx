import React, { FC, ReactNode } from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import classNames from 'classnames'

import './InputField.sass'
import { ValidatorType } from '../../types'

type InputFieldProps = {
  children?: ReactNode
  name: string
  placeholder: string | undefined
  validate: Array<ValidatorType>
  component: FC<WrappedFieldProps>
}

const InputField: FC<InputFieldProps> = ({children, ...props}) =>
  <Field {...props} className='input form-control'/>
export default InputField