import React, { FC } from 'react'
import { maxLength, required } from '../../../utils/validators'
import { createField, Input } from '../../common/Forms/Forms'
import { InjectedFormProps, reduxForm } from 'redux-form'
import * as  t from '../../../types/todo'

const maxLengthTodo = maxLength(150)

const TodoUpdateForm: FC<InjectedFormProps<t.form>> = ({handleSubmit}) => {
  // @ts-ignore
  const onSubmit = () => handleSubmit()

  return <form onSubmit={handleSubmit}>
    {createField<t.formKeys>(
      'text', 'What you\'ll to do?',
      [required, maxLengthTodo], Input,
      {autoFocus: true, onBlur: onSubmit})}
  </form>
}

export default reduxForm<t.form>({form: 'todoUpdateForm'})(TodoUpdateForm)