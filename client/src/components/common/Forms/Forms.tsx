import React, { FC } from 'react'
import * as s from './forms.module.css'
import { Field, WrappedFieldProps } from 'redux-form'
import { ValidatorType } from '../../../types'

type FormType = {
  el: string
}

const Form: FC<WrappedFieldProps & FormType> = ({input, meta, el, ...props}) => {
  const showError = meta.touched && meta.error
  // className={`${s.form} ${showError ? s.error : ''}`}
  return (
    <>
      {React.createElement(el, {...input, ...props})}
      {showError && <small className='invalid-feedback'>{meta.error}</small>}
    </>
  )
}

export const Textarea: FC<WrappedFieldProps> = props => <Form {...props} el='textarea'/>
export const Input: FC<WrappedFieldProps> = props => <Form {...props} el='input'/>

export const createField = <Keys extends string>(name: Keys,
                                                 placeholder: string | undefined,
                                                 validators: Array<ValidatorType>,
                                                 component: FC<WrappedFieldProps>,
                                                 props = {},
                                                 text = '') => (
  <>
    <Field
      name={name}
      placeholder={placeholder}
      validate={validators}
      component={component}
      className='form-control mb-2'
      {...props}
    /> {text}
  </>
)