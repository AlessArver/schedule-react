import React from 'react'
import * as s from './forms.module.css'
import { Field } from 'redux-form'

const Form = ({ input, meta, el, ...props }) => {
  const showError = meta.touched && meta.error

  return (
    <div className={`${s.form} ${showError ? s.error : ''}`}>
      {React.createElement(el, { ...input, ...props })}
      {showError && <small>{meta.error}</small>}
    </div>
  )
}

export const Textarea = props => <Form {...props} el='textarea'/>
export const Input = props => <Form {...props} el='input'/>

export const createField = (name, placeholder, validators, component, props = {}, text = '') => (
  <>
    <Field
      name={name}
      placeholder={placeholder}
      validate={validators}
      component={component}
      {...props}
    /> {text}
  </>
)